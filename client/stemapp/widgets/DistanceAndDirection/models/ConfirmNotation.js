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

/*global define*/
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./ConfirmNotation.html',
    'jimu/utils'
], function (
    dojoDeclare,
    dijitWidgetBase,
    dijitTemplatedMixin,
    dijitWidgetsInTemplate,
    ConfirmNotation,
    jimuUtils
) {
'use strict';
return dojoDeclare([dijitWidgetBase, dijitTemplatedMixin, dijitWidgetsInTemplate], {
      templateString: ConfirmNotation,
      numberOfInputs: 0,
      selectOptions: {},

      constructor: function (options1,itms) {
          this.numberOfInputs = itms.length;
          this.selectOptions = itms;
        },

      postCreate: function () {
          this.label1.innerHTML = jimuUtils.sanitizeHTML(this.numberOfInputs + this.nls.multipleNotationsMessage);
          for (var i = 0; i < this.selectOptions.length; i++) {
            this.comboOptions.addOption({ value: this.selectOptions[i].name,
              label: this.selectOptions[i].notationType});
          }
        }
    });
});
