sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomersLoyalty/MaintainCustomers/test/integration/FirstJourney',
		'CustomersLoyalty/MaintainCustomers/test/integration/pages/CustomerList',
		'CustomersLoyalty/MaintainCustomers/test/integration/pages/CustomerObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerList, CustomerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomersLoyalty/MaintainCustomers') + '/index.html'
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