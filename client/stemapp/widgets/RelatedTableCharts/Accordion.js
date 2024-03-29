﻿///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define([
  'dijit/_WidgetBase',
  'dojo/_base/declare',
  'dojo/Evented',
  'dojo/_base/array',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/query',
  'dojo/dom-construct',
  'dojo/dom-class',
  'dojo/dom-style',
  'dojo/dom-attr',
  './ChartLayout',
  'jimu/utils',
  'dojo/keys',
  "dijit/focus"
], function (
  _WidgetBase,
  declare,
  Evented,
  array,
  lang,
  on,
  query,
  domConstruct,
  domClass,
  domStyle,
  domAttr,
  ChartLayout,
  jimuUtils,
  keys,
  focusUtil
) {
  return declare([_WidgetBase, Evented], {
    openPanels: [],
    chartArray: [],
    constructor: function () {},

    postCreate: function () {
      this.inherited(arguments);
    },

    /**
     * initialize and create accordion pane for each configured chart
     * @memberOf widgets/RelatedTableCharts/Accordion
     */
    initAccordionPane: function () {
      var accordionDomNode, chartObj, firstChartTitleNodeArr, firstChartTitleNode;
      if (this.config.charts.highlightedChartIndex || this.config.charts.highlightedChartIndex ===
        0) {
        if (array.indexOf(this.openPanels, "Chart" + this.config.charts.highlightedChartIndex) ===
          -1) {
          this.openPanels.push("Chart" + this.config.charts.highlightedChartIndex);
        }
      }
      accordionDomNode = domConstruct.create("div", {
        "class": "esriCTAccordionWrapper"
      }, this.node);
      this.chartArray = [];
      array.forEach(this.config.charts, lang.hitch(this, function (
        currentObject, index) {
        var chartTitle, chartContent, chartRow, chartIndex, chartTitleText;
        chartIndex = "Chart" + index;
        //create row which internally contains title and content div
        chartRow = domConstruct.create("div", {
          "class": "esriCTChartRow",
          "chartIndex": chartIndex
        }, accordionDomNode);
        //get valid html input string
        chartTitleText = jimuUtils.sanitizeHTML(currentObject.chartConfig.sectionTitle);
        chartTitle = domConstruct.create("div", {
          "class": "esriCTChartTitle",
          "innerHTML": chartTitleText,
          "title": chartTitleText,
          "role": "button",
          "tabindex": 0,
          "aria-label": chartTitleText,
          "aria-expanded": "false"
        }, chartRow);
        chartContent = domConstruct.create("div", {
          "class": "esriCTChartContent"
        }, chartRow);
        if (currentObject.chartData && currentObject.selectedFeature) {
          //create chart
          chartObj = new ChartLayout({
            nls: this.nls,
            config: currentObject
          }, domConstruct.create("div", {}, chartContent));
          this.own(on(chartObj, 'setFocusNodes', lang.hitch(this, function () {
            this.emit('setFocusNodes');
          })));
          chartObj.onChartCreated = lang.hitch(this, function () {
            if (this.openPanels.length) {
              if (this.openPanels.indexOf(chartIndex) === -1) {
                domClass.add(chartContent, "esriCTHidden");
              }
            } else if (index !== 0) {
              domClass.add(chartContent, "esriCTHidden");
            }
          });
          chartObj.onChartResize = lang.hitch(this, function () {
            if (this.openPanels.length) {
              this._setFocusOnChart();
            }
          });

          this.chartArray.push(chartObj);
          chartObj.startup();
          //Handle toggling of chart content
          on(chartTitle, "click", lang.hitch(this, function (evt) {
            this._expandChart(evt, index);
          }));

          on(chartTitle, "keydown", lang.hitch(this, function (evt) {
            if (evt.keyCode === keys.ENTER || evt.keyCode === keys.SPACE) {
              this._expandChart(evt, index);
            }
          }));
        } else {
          //as chart data is not available push null into chartArray
          this.chartArray.push(null);
          domClass.add(chartRow, "esriCTDisabledRow");
          domClass.add(chartContent, "esriCTHidden");
        }
        //Check if the panels were already open, and accordingly handle there visibility
        if (this.openPanels.indexOf(chartIndex) !== -1) {
          this._toggleSelectedChart(chartTitle, false);
        }
        //By default first chart should always be kept open
        if (index === 0 && (!this.openPanels.length)) {
          this.config.charts.highlightedChartIndex = index;
          this._toggleSelectedChart(chartTitle, false);
        }
      }));
      // give focus to first chart title after point drawn on map
      firstChartTitleNodeArr = query(".esriCTChartTitle", this.node);
      if (firstChartTitleNodeArr.length > 0) {
        firstChartTitleNode = firstChartTitleNodeArr[0];
      }
      if (firstChartTitleNode !== '' && firstChartTitleNode !== null && firstChartTitleNode !== undefined) {
        focusUtil.focus(firstChartTitleNode);
      }
    },

    /**
     * set focus on chart
     * @memberOf widgets/RelatedTableCharts/Accordion
     */
    _setFocusOnChart: function () {
      var chartContent, outerChartContainer, index = this.config.charts.highlightedChartIndex;
      chartContent = query('.esriCTChartRow', this.node)[index];
      outerChartContainer = query('.esriCTResultsPanel')[0];
      if (chartContent && outerChartContainer) {
        //scroll to highlighted chart
        outerChartContainer.scrollTop = chartContent.offsetTop - 81;
      }
      this.emit('setFocusNodes');
    },

    /**
     * toggle selected chart
     * @param {object} currentChartHeader: header node of selected chart
     * @param {boolean} isChartOpen:boolean value which indicates whether the chart is open or close
     * @memberOf widgets/RelatedTableCharts/Accordion
     */
    _toggleSelectedChart: function (currentChartHeader, isChartOpen) {
      var currentNode, currentChartIndex, index;
      currentNode = query(".esriCTChartContent", currentChartHeader.parentElement)[0];
      currentChartIndex = domAttr.get(currentChartHeader.parentElement, "chartIndex");
      index = currentChartIndex.split("Chart")[1];
      if (isChartOpen) {
        domClass.add(currentNode, "esriCTHidden");
        domClass.remove(currentChartHeader, "esriCTChartSelected");
        if (this.openPanels.indexOf(currentChartIndex) !== -1) {
          this.openPanels.splice(this.openPanels.indexOf(currentChartIndex), 1);
        }
        // close chart
        domAttr.set(currentChartHeader, "aria-expanded", "false");
      } else {
        if (this.config.charts[index].chartData) {
          //show chart panel and resize chart
          domClass.remove(currentNode, "esriCTHidden");
          domClass.add(currentChartHeader, "esriCTChartSelected");
          //on opening the chart resize it
          if (this.chartArray[index]) {
            this.chartArray[index].resizeChart(0);
          }
          //highlight the chart
          //if the highlight index matches then emit event to highlight on map and highlight the chart row
          if (this.config.charts.highlightedChartIndex === parseInt(index, 10)) {
            this._highlightChart(currentChartHeader, index);
          }
          // open chart
          domAttr.set(currentChartHeader, "aria-expanded", "true");
        }
        if (this.openPanels.indexOf(currentChartIndex) === -1) {
          this.openPanels.push(currentChartIndex);
        }
      }
      this.emit('setFocusNodes');
    },

    /**
     * Highlights the selected chart and emits the event
     * @param {object} currentChartHeader: header node of selected chart
     * @param {int} index: index of the selected chart
     * @memberOf widgets/RelatedTableCharts/Accordion
     */
    _highlightChart: function (currentChartHeader, index) {
      //emit event of chart selected
      this.emit('chartSelected', index);
      //remove last highlighted row if any
      if (query(".esriCTChartHighlighted").length) {
        domClass.remove(query(".esriCTChartHighlighted")[0], "esriCTSelectedChartBorder");
        domClass.remove(query(".esriCTChartHighlighted")[0], "esriCTChartHighlighted");
      }
      //highlight current row and add selected theme colors band to row
      domClass.add(currentChartHeader, "esriCTChartHighlighted");
      domClass.add(currentChartHeader, "esriCTSelectedChartBorder");
      domStyle.set(currentChartHeader, "border-color", this.config.selectedThemeColor);
    },

    /**
     * resize the open charts
     * @memberOf widgets/RelatedTableCharts/Accordion
     */
    resizeContents: function () {
      array.forEach(this.chartArray, lang.hitch(this, function (
        chartObject, index) {
        if (chartObject && chartObject.config.chartData) {
          //if panel is open then only resize the contents
          if (this.openPanels.indexOf("Chart" + index) !== -1) {
            chartObject.resizeChart(300);
          }
        }
      }));

    },

    /**
     * This function is used to expand the chart on click of its title
     */
    _expandChart: function (evt, index) {
      //if chart is open
      if (domClass.contains(evt.currentTarget, "esriCTChartSelected")) {
        //if chart is highlighted then just close it
        //else just highlight the chart as it is already opened
        if (domClass.contains(evt.currentTarget, "esriCTChartHighlighted")) {
          this._toggleSelectedChart(evt.currentTarget, true);
        } else {
          this.config.charts.highlightedChartIndex = index;
          this._highlightChart(evt.currentTarget, index);
        }
      } else {
        this.config.charts.highlightedChartIndex = index;
        this._toggleSelectedChart(evt.currentTarget, false);
      }
    }
  });
});