// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:builder/plugins/header/AppItem.html":'\x3ca\x3e\r\n  \x3cdiv class\x3d"thumbnail-icon" data-dojo-attach-point\x3d"thumbnailNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"label" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n\x3c/a\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Evented dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./AppItem.html".split(" "),function(d,e,c,f,g,h,k,l){return d([h,k,f],{templateString:l,baseClass:"app-item",postCreate:function(){var a,b;window.isXT?(a=this.appItem.thumbnail,b=this.appItem.name):(a=this.appItem.thumbnailUrl,b=this.appItem.title);a?c.setStyle(this.thumbnailNode,"background-image","url("+a+")"):c.addClass(this.thumbnailNode,"default");this.labelNode.innerHTML=
b;this.labelNode.title=b;this.own(g(this.domNode,"click",e.hitch(this,function(){this.emit("app-click",this.appItem)})))},setHref:function(a){a&&c.setAttr(this.domNode,"href",a)}})});