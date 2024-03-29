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
  'dijit/_WidgetBase',
  './utils'
],
function(declare, lang, html, _WidgetBase, utils) {
  return declare(_WidgetBase, {
    'class': 'jimu-widget-placeholder',

    position: null,

    postCreate: function(){
      this.inherited(arguments);
      this.indexNode = html.create('div', {
        'class': 'inner',
        innerHTML: this.index
      }, this.domNode);
      html.setAttr(this.domNode, 'title', window.jimuNls.widgetPlaceholderTooltip);
    },

    moveTo: function(position){
      this.position = lang.clone(position);

      var style = {
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        top: 'auto',
        width: 'auto',
        height: 'auto'
      };
      style = lang.mixin(style, utils.getPositionStyle(position));
      //we don't change width and height through layout
      delete style.width;
      delete style.height;
      html.setStyle(this.domNode, style);
    },

    setIndex: function(index){
      this.index = index;
      this.indexNode.innerHTML = index;
    }
  });
});