sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalty/Purchases/test/integration/FirstJourney',
		'CustomerLoyalty/Purchases/test/integration/pages/PurchaseList',
		'CustomerLoyalty/Purchases/test/integration/pages/PurchaseObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseList, PurchaseObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalty/Purchases') + '/index.html'
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