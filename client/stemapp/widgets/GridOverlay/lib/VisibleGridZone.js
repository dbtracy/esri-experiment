///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

/**
 *  @fileOverview Contains the VisibleGridZone class used by MGRS GridOverlay widgets.
 *  @author Esri
 */

define([
  "dojo/_base/declare",
  "./GridPolygon"
], function(
  declare,
  GridPolygon
) {

  /**
   * @class module:mgrs-utils~VisibleGridZone
   * @classdesc A VisibleGridZone object is derived by taking a NonPolarGridZone object
   * and displaying it on screen.  It holds all the parameters needed to draw and label
   * the visible portion of the NonPolarGridZone.
   *
   * @constructor
   * @param {Object}
   * properties
   * The VisibleGridZone constructor takes an object as described below
   * @param {external:Polyline}
   * properties.polyline
   * The visible border of the grid zone
   * @param {external:Polygon}
   * properties.polygon
   * The visible area of the grid zone
   * @param {Number}
   * [properties.offset=0]
   * The non-normalized x-offset of the grid
   * @param {module:mgrs-utils~NonPolarGridZone}
   * properties.nonPolarGridZone
   *The NonPolarGridZone object that is related to this VisibleGridZone object
   * @param {external:Map}
   * properties.map
   * The Map object that the grid overlay is associated with
   * @param {module:labeling-utils~LabelParameters} properties.labelParameters
   * An object holding all the label parameters
   *
   * @example
   * var offset = -1; // in this case, the current longitude is in the range -540 => -180
   * var nonPolarGridZone = ZonesDictionary["42S"];
   * var zonePolygon = nonPolarGridZone.toPolygon(offset);
   *
   * convert zonePolygon to web mercator so it can be used with the
   * geometryEngine.intersect method
   * zonePolygon = webMercatorUtils.geographicToWebMercator(zonePolygon);
   * var clippedPolygon = geometryEngine.intersect(zonePolygon, map.extent);
   *
   * var labelParameters = {
   *     "xOffset": 20,
   *     "yOffset": 20,
   *     "rotation": 0,
   *     "color": new Color([0, 0, 255]),
   *     "fontFamily": "Arial, Helvetica, sans-serif",
   *     "fontSize": "18px"
   * };
   *
   * visibleGridZone = new VisibleGridZone({
   *     "map": map,
   *     "polyline": clippedPolygon,
   *     "polygon": zonePolygon,
   *     "offset": 0,
   *     "nonPolarGridZone": nonPolarGridZone,
   *     "labelParameters": labelParameters
   * });
   */
  return declare(null, /** @lends module:mgrs-utils~VisibleGridZone# */ {

    /** The clipped portion of the grid zone polyline that represents the visible border
     * @type {external:Polyline}
     */
    "polyline": null,

    /** The clipped portion of the grid zone polygon that represents the visible area
     * @type {external:Polygon}
     */
    "polygon": null,

    /** The non-normalized x-offset of the grid. This allows for grid overlays
    * to be drawn in wraparound mound
    * (i.e. spanning accross the Dateline).
     * For Example: An offset of 0 means the x-coordinate is in the longitude range of -180 => 180,
     * and an offset of -1 correlates to the range of -540 => -180.
     * @type {Number}
     */
    "offset": null,

    /** The original NonPolarGridZone object, before it was clipped for visible area
     * @type {module:mgrs-utils~NonPolarGridZone}
     */
    "nonPolarGridZone": null,

    /** The Map object that this grid overlay is associated with
     * @type {external:Map}
     */
    "map": null,

    constructor: function(args) {
      // offset must be an integer
      this.offset = Math.round(args.offset);
      this.polyline = args.polyline;
      this.polygon = args.polygon;
      this.nonPolarGridZone = args.nonPolarGridZone;
      this.map = args.map;

      // construct a GridPolygon, which is used as the label manager
      var gridPolygonArgs = {
        "clippedPolygon": this.polygon,
        "unclippedPolygon": this.nonPolarGridZone.toPolygon(args.offset),
        "map": this.map,
        "xmin": this.nonPolarGridZone.extent.xmin,
        "ymin": this.nonPolarGridZone.extent.ymin,
        "xmax": this.nonPolarGridZone.extent.xmax,
        "ymax": this.nonPolarGridZone.extent.ymax,
        "minMaxType": "degrees",
        "utmZone": 0,
        "text": this.nonPolarGridZone.id,
        "labelParameters": args.labelParameters
      };
      this.gridPolygon = new GridPolygon(gridPolygonArgs);
    },

    /**
     * Returns an array of TextSymbol graphics that represent labels for the VisibleGridZone
     * @return {external.TextSymbol[]} An array of TextSymbol objects used for labeling
     * the VisibleGridZone
     */
    getLabels: function() {
      return this.gridPolygon.getLabels(true);
    },

    /**
     * Returns the TextSymbol graphic that represents the label
     * at the center of the NonPolarGridZone.
     * @return {external:TextSymbol} The TextSymbol object representing the
     * center label of the VisibleGridZone
     */
    getCenterLabel: function() {
      return this.gridPolygon.getCenterLabel();
    }

  });
});