// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/app-list/AppOperMenu.html":'\x3cdiv data-dojo-attach-event\x3d"onclick:_onMenuClick"\x3e\r\n  \x3cdiv class\x3d"up-triangle" data-dojo-attach-point\x3d"upTriangle"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"down-triangle" data-dojo-attach-point\x3d"downTriangle"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"item item-createApp-from-template" data-dojo-attach-point\x3d"createAppFromTemplate" data-dojo-attach-event\x3d"onclick:_onCreateAppFromTempalteClick"\x3e${nls.createApp}\x3c/div\x3e\r\n  \x3cdiv class\x3d"item item-editAppInfo" data-dojo-attach-point\x3d"editAppInfo" data-dojo-attach-event\x3d"onclick:_onEditClick"\x3e${nls.editAppInfo}\x3c/div\x3e\r\n  \x3cdiv class\x3d"item item-download" data-dojo-attach-point\x3d"download" data-dojo-attach-event\x3d"onclick:_onDownloadClick"\x3e\r\n    \x3ca data-dojo-attach-point\x3d"downloadLinkNode" style\x3d"display:inline-block;width:100%;height:100%;" target\x3d"downloadTargetFrame"\x3e${nls.download}\x3c/a\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"item item-duplicate" data-dojo-attach-point\x3d"duplicate" data-dojo-attach-event\x3d"onclick:_onDuplicateClick"\x3e${nls.duplicate}\x3c/div\x3e\r\n  \x3cdiv class\x3d"item item-remove" style\x3d"border-bottom-left-radius:5px;border-bottom-right-radius:5px;" data-dojo-attach-point\x3d"remove" data-dojo-attach-event\x3d"onclick:_onRemoveClick"\x3e${nls.deleteMenu}\x3c/div\x3e\r\n  \x3c!--div class\x3d"item item-agol-template" style\x3d"border-bottom-left-radius:5px;border-bottom-right-radius:5px;" data-dojo-attach-point\x3d"agolTemplate" data-dojo-attach-event\x3d"onclick:_onAgolTemplateClick"\x3e${nls.agolTemp}\x3c/div\x3e \r\n  \x3cdiv class\x3d"item item-qrcode" style\x3d"" data-dojo-attach-point\x3d"qrcode" data-dojo-attach-event\x3d"onclick:_onQRCodeClick"\x3eqrcodeeeeeee-nonls\x3c/div--\x3e \r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./AppOperMenu.html dojo/on dojo/query dojo/keys dojo/_base/lang jimu/dijit/Popup jimu/dijit/Message builder/serviceUtils jimu/dijit/QRCode builder/dijit/FullScreenPopup builder/dijit/EditItemInfo".split(" "),function(h,b,k,l,m,n,p,q,c,e,f,g,r,t,u){return h([k,l],{templateString:m,baseClass:"app-oper-menu white-style",app:void 0,isShow:!1,position:{},itemDefaultColor:"#ffffff",appListWidget:void 0,loadingDiv:null,
_loading:null,_downloadUrl:null,constructor:function(){this.height||(this.height=0);this.offset||(this.offset={top:0,left:0,right:0})},postCreate:function(){this.inherited(arguments);this._loading=this.appListWidget.loading;this._initMenu();this.hide();this._downloadUrl="/webappbuilder/rest/apps/"+this.app.id+"/download";b.setAttr(this.downloadLinkNode,"href",this._downloadUrl);this.own(n(this.downloadLinkNode,"click",c.hitch(this,function(){this.hide()})));this.app.isTemplate&&b.setAttr(this.editAppInfo,
"innerHTML",this.nls.editTemplateInfo)},refresh:function(){var a="",d="";if(this.appContentNode){var a=b.position(this.posNode),d=b.position(this.appContentNode),c=b.getStyle(this.appContentNode,"height");a.y+this.height+25>d.y+c?(d=this.offset.top,a="",b.setStyle(this.upTriangle,"display","none"),b.setStyle(this.downTriangle,"top",this.height-4+"px"),b.setStyle(this.downTriangle,"display","block")):(a=this.offset.top,d="")}b.setStyle(this.domNode,isRTL?{top:a+"px",bottom:d+"px",left:this.offset.left+
"px"}:{top:a+"px",bottom:d+"px",right:this.offset.right+"px"})},_refreshAppOrTempaltePage:function(){this.appListWidget.resetRefreshImageFlag();this.app.isTemplate?this.appListWidget.refreshTemplatePage():this.appListWidget.refreshAppPage()},show:function(){this.refresh();b.setStyle(this.domNode,"display","block");300<=b.getStyle(this.domNode,"width")?(b.setAttr(this.editAppInfo,"title",this.editAppInfo.innerHTML),b.setAttr(this.duplicate,"title",this.duplicate.innerHTML),b.setAttr(this.remove,"title",
this.remove.innerHTML)):(b.removeAttr(this.editAppInfo,"title"),b.removeAttr(this.duplicate,"title"),b.removeAttr(this.remove,"title"));this.isShow=!0},hide:function(){b.setStyle(this.domNode,"display","none");this.isShow=!1},_initMenu:function(){this.isTemplate?(b.addClass(this.editAppInfo,"border-top-radius"),this._disableItem(this.createAppFromTemplate),this.app.isPredefined&&(this._disableItem(this.duplicate),this._disableItem(this.editAppInfo),this._disableItem(this.remove),this._disableItem(this.download),
this._disableItem(this.duplicate))):(b.addClass(this.editAppInfo,"border-top-radius"),this._disableItem(this.createAppFromTemplate),this._disableItem(this.download))},_disableItem:function(a){b.setStyle(a,"display","none")},_onMenuClick:function(a){a.stopPropagation()},_onRemoveClick:function(){var a,d;this.app.isTemplate?(a=this.nls.confirmDeleteTemplate,d=this.nls.deleteTemplateTitle):(a=this.nls.confirmDeleteApp,d=this.nls.deleteAppTitle);var b=new e({content:a,titleLabel:d,width:"425",autoHeight:!0,
"class":"jimu-popup-in-home",buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){this._loading.show(this.nls.deleting);b.close();g.removeApp(this.app.id).then(c.hitch(this,function(a){a.success?(console.log("Removed app successfully, id\x3d"+this.app.id),this._refreshAppOrTempaltePage()):console.error(this.nls.deleteFalse);this._loading.hide()}),function(){console.error(this.nls.deleteError);this._loading.hide()})})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,
function(){b.close()})}]})},_onDuplicateClick:function(){this._loading.show(this.nls.duplicating);g.duplicateApp({name:this.app.name,description:this.app.description,fromAppId:this.app.id,appType:this.app.appType,isTemplate:this.app.isTemplate,isPredefined:this.app.isPredefined}).then(c.hitch(this,function(a){this._loading.hide();a.success?(console.log("Duplicated app successfully, app id\x3d"+this.app.id),this._refreshAppOrTempaltePage()):console.error(this.nls.duplicateFalse)}),function(){console.error(this.nls.duplicateError);
this._loading.hide()});this.hide()},_onEditClick:function(){this.itemInfoDijit=new u({itemInfo:this.app,nls:this.nls});var a;a=this.app.isTemplate?this.nls.editTemplateInfo:this.nls.editAppInfo;var d=p("#main-page")[0];this._EditPopup=new t({zIndex:101,titleStr:a,blurContainer:d.firstElementChild,content:this.itemInfoDijit.domNode,subDijit:this.itemInfoDijit,buttons:[{label:this.nls.ok,isHighLight:!0,onClick:c.hitch(this,this._onEditOKClick)},{label:this.nls.cancel,isHighLight:!1,onClick:c.hitch(this,
this._onEditCancelClick)}],btnsAtuoBottom:!0});this._EditPopup.placeAt(d);this._EditPopup.show();this.itemInfoDijit.focusItemByName("appName");this.hide();this.posNode&&b.removeClass(this.posNode,"item-more-selected")},_onEditOKClick:function(){var a=c.clone(this.app),b=this.itemInfoDijit.getProperties();a.name=b.name;a.description=b.description;!0!==this.app.isTemplate&&b.icon&&(a.icon=b.icon);b.thumbnail&&(a.thumbnail=b.thumbnail);this.appListWidget.updateApp(a).then(c.hitch(this,function(a){!0===
a.success?(this._refreshAppOrTempaltePage(),this._EditPopup.close()):(console.error(a.message),new f({message:this.nls.editAppFalse}))}),c.hitch(this,function(a){console.error(a);new f({message:this.nls.editError})}))},_onEditCancelClick:function(){this._EditPopup&&this._EditPopup.close()},_onDownloadClick:function(){},_onAgolTemplateClick:function(){var a=this.appListWidget.pluginsMeta["popup-actions.popup-agoltemplate"];a&&this.appListWidget.pluginManager.loadPlugin(a).then(c.hitch(this,function(a){a.onClickBeforeConfigPage(this.app)}))},
_onCreateAppFromTempalteClick:function(){var a=this.appListWidget.pluginManager.getExtensions("startup.creation-entry")[0],a=this.appListWidget.pluginsMeta[a.pluginName];this._loading.show("");this.appListWidget.pluginManager.loadPlugin(a).then(c.hitch(this,function(a){a.popupNewCreateDlg("",this.app,700);this._loading.hide()}),c.hitch(this,function(){this._loading.hide()}))},_onQRCodeClick:function(){new e({content:new r({text:"http://"+window.location.host+path+"apps/"+this.app.id,width:128,height:128}),
container:"main-page",titleLabel:"qrcode-nonls",width:300,autoHeight:!0,buttons:[{label:this.nls.cancel,key:q.ESCAPE}]})}})});