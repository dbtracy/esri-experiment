///////////////////////////////////////////////////////////////////////////
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

define(['dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/html',
  'dojo/on',
  'dojo/text!./FeatureSetEditorChooser.html',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'jimu/dijit/SymbolChooser',
  'jimu/dijit/CheckBox',
  'jimu/utils',
  'esri/symbols/jsonUtils',
  '../BaseEditor',
  'dijit/form/RadioButton'
],
function(declare, lang, html, on, template, _TemplatedMixin, _WidgetsInTemplateMixin,
  SymbolChooser, CheckBox, utils, jsonUtils, BaseEditor) {
  return declare([BaseEditor, _TemplatedMixin, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-gp-editor-base jimu-gp-editor-fsec',
    templateString: template,
    editorName: 'FeatureSetEditorChooser',

    postCreate: function(){
      this.inherited(arguments);
      this.value = {};

      this.featureSetUrl.set('placeholder', this.nls.urlPlaceholder);

      this.visibleCheckbox = new CheckBox({
        checked: this.param.featureSetMode === 'url' && this.param.showUrlContent,
        label: this.nls.showLayerContent,
        onChange: lang.hitch(this, this._viewLayerContent)
      });
      this.visibleCheckbox.placeAt(this.visibleCheckboxDiv);

      if (this.param.defaultValue && this.param.defaultValue.geometryType === 'esriGeometryPolygon') {
        html.setStyle(this.mapModeWrapper, 'display', 'block');
      } else {
        html.setStyle(this.mapModeWrapper, 'display', 'none');
      }

      if(this.param.featureSetMode === 'url' && this.param.featureSetUrl){
        this.featureSetUrl.setValue(this.param.featureSetUrl);
      }

      this.own(on(this.mapMode, 'click', lang.hitch(this, this._onMapModeSelect)));
      this.own(on(this.drawMode, 'click', lang.hitch(this, this._onDrawModeSelect)));
      this.own(on(this.fileMode, 'click', lang.hitch(this, this._onFileModeSelect)));
      this.own(on(this.layersMode, 'click', lang.hitch(this, this._onLayersModeSelect)));
      this.own(on(this.urlMode, 'click', lang.hitch(this, this._onUrlModeSelect)));

      switch (this.param.featureSetMode) {
        case 'map':
          this.mapMode.set('checked', true);
          this._onMapModeSelect();
          break;
        case 'draw':
          this.drawMode.set('checked', true);
          this._onDrawModeSelect();
          break;
        case 'file':
          this.fileMode.set('checked', true);
          this._onFileModeSelect();
          break;
        case 'layers':
          this.layersMode.set('checked', true);
          this._onLayersModeSelect();
          break;
        case 'url':
          this.urlMode.set('checked', true);
          this._onUrlModeSelect();
          break;
      }
    },

    getValue: function(){
      if(this.featureSetUrl.value){
        this.value.featureSetUrl = this.featureSetUrl.value;
      }
      if(this.symbolChooser && html.getStyle(this.symbolChooserSection, 'display') === 'block'){
        this.value.symbol = this.symbolChooser.getSymbol().toJson();
      }
      if(this.value.featureSetMode === 'url'){
        this.value.showUrlContent = this.visibleCheckbox.getValue();
      }
      return this.value;
    },

    _onMapModeSelect: function(){
      html.setStyle(this.symbolChooserSection, 'display', 'none');
      html.setStyle(this.urlOptionsDiv, 'display', 'none');
      this.value.featureSetMode = 'map';
    },

    _onDrawModeSelect: function(){
      this._showSymbolChooser();
      html.setStyle(this.urlOptionsDiv, 'display', 'none');
      this.value.featureSetMode = 'draw';
    },

    _showSymbolChooser: function(){
      if(!this.param.defaultValue || !this.param.defaultValue.geometryType){
        //for now, we hide the symbol set if we dont know the geometry type.
        html.setStyle(this.symbolChooserSection, 'display', 'none');
      }else{
        if(!this.symbolChooser){
          var o = {};
          if(this.param.symbol){
            o.symbol = jsonUtils.fromJson(this.param.symbol);
          }else{
            o.type = utils.getSymbolTypeByGeometryType(this.param.defaultValue.geometryType);
          }
          this.symbolChooser = new SymbolChooser(o, this.symbolChooserNode);
          this.symbolChooser.startup();
        }
        html.setStyle(this.symbolChooserSection, 'display', 'block');
      }
    },

    _onLayersModeSelect: function(){
      html.setStyle(this.symbolChooserSection, 'display', 'none');
      html.setStyle(this.urlOptionsDiv, 'display', 'none');
      this.value.featureSetMode = 'layers';
    },

    _onFileModeSelect: function(){
      html.setStyle(this.symbolChooserSection, 'display', 'none');
      html.setStyle(this.urlOptionsDiv, 'display', 'none');
      this.value.featureSetMode = 'file';
    },

    _onUrlModeSelect: function(){
      html.setStyle(this.urlOptionsDiv, 'display', '');

      if(this.visibleCheckbox.getValue()){
        this._showSymbolChooser();
      }else{
        html.setStyle(this.symbolChooserSection, 'display', 'none');
      }

      this.value.featureSetMode = 'url';
    },

    _viewLayerContent: function(checked){
      if(checked){
        this._showSymbolChooser();
      }else{
        html.setStyle(this.symbolChooserSection, 'display', 'none');
      }
    }
  });
});
