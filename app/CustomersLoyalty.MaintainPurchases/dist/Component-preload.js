//@ui5-bundle CustomersLoyalty/MaintainPurchases/Component-preload.js
sap.ui.require.preload({
	"CustomersLoyalty/MaintainPurchases/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("CustomersLoyalty.MaintainPurchases.Component",{metadata:{manifest:"json"}})});
},
	"CustomersLoyalty/MaintainPurchases/i18n/i18n.properties":'# This is the resource bundle for CustomersLoyalty.MaintainPurchases\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Maintain Purchases\n\n#YDES: Application description\nappDescription=Maintain Purchases\n\nflpTitle=Maintain Purchases\n\nflpSubtitle=\n',
	"CustomersLoyalty/MaintainPurchases/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"CustomersLoyalty.MaintainPurchases","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.10.6","toolsId":"c38b6dbf-e686-4334-b850-714763afaef6"},"dataSources":{"mainService":{"uri":"service/CustomersLoyalty/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"CustomersLoyaltyMaintainPurchases-display":{"semanticObject":"CustomersLoyaltyMaintainPurchases","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"CustomersLoyalty.MaintainPurchases.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"PurchaseList","target":"PurchaseList"},{"pattern":"Purchase({key}):?query:","name":"PurchaseObjectPage","target":"PurchaseObjectPage"}],"targets":{"PurchaseList":{"type":"Component","id":"PurchaseList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Purchase","variantManagement":"Page","navigation":{"Purchase":{"detail":{"route":"PurchaseObjectPage"}}},"initialLoad":"Enabled"}}},"PurchaseObjectPage":{"type":"Component","id":"PurchaseObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Purchase"}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.CustomerLoyalty"}}'
});
//# sourceMappingURL=Component-preload.js.map
