sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalty/Customers/test/integration/FirstJourney',
		'CustomerLoyalty/Customers/test/integration/pages/CustomerList',
		'CustomerLoyalty/Customers/test/integration/pages/CustomerObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerList, CustomerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalty/Customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerList: CustomerList,
					onTheCustomerObjectPage: CustomerObjectPage
                }
            },
            opaJourney.run
        );
    }
);