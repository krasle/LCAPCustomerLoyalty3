sap.ui.define(["sap/ui/test/opaQunit"],function(e){"use strict";var i={run:function(){QUnit.module("First journey");e("Start application",function(e,i,t){e.iStartMyApp();t.onThePurchaseList.iSeeThisPage()});e("Navigate to ObjectPage",function(e,i,t){i.onThePurchaseList.onFilterBar().iExecuteSearch();t.onThePurchaseList.onTable().iCheckRows();i.onThePurchaseList.onTable().iPressRow(0);t.onThePurchaseObjectPage.iSeeThisPage()});e("Teardown",function(e,i,t){e.iTearDownMyApp()})}};return i});
//# sourceMappingURL=FirstJourney.js.map