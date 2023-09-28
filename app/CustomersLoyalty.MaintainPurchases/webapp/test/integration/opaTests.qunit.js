sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomersLoyalty/MaintainPurchases/test/integration/FirstJourney',
		'CustomersLoyalty/MaintainPurchases/test/integration/pages/PurchaseList',
		'CustomersLoyalty/MaintainPurchases/test/integration/pages/PurchaseObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseList, PurchaseObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomersLoyalty/MaintainPurchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseList: PurchaseList,
					onThePurchaseObjectPage: PurchaseObjectPage
                }
            },
            opaJourney.run
        );
    }
);