using { loyaltySrv } from '../srv/service.cds';

annotate loyaltySrv.Customer with @UI.HeaderInfo: { TypeName: 'Customer', TypeNamePlural: 'Customers', Title: { Value: customerId } };
annotate loyaltySrv.Customer with {
  ID @Common.Text: { $value: customerId, ![@UI.TextArrangement]: #TextOnly }
};
annotate loyaltySrv.Customer with @UI.Identification: [{ Value: customerId }];
annotate loyaltySrv.Customer with {
  customerId @title: 'Customer ID';
  firstName @title: 'First Name';
  lastName @title: 'Last Name';
  email @title: 'Email';
  totalPoints @title: 'Total Points';
  totalPurchaseValue @title: 'Total Purchase Value';
  numberOfPurchases @title: 'Number of Purchases';
  redeemedPoints @title: 'Redeemed Points'
};

annotate loyaltySrv.Customer with @UI.LineItem: [
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: firstName },
    { $Type: 'UI.DataField', Value: lastName },
    { $Type: 'UI.DataField', Value: email },
    { $Type: 'UI.DataField', Value: totalPoints },
    { $Type: 'UI.DataField', Value: totalPurchaseValue },
    { $Type: 'UI.DataField', Value: numberOfPurchases },
    { $Type: 'UI.DataField', Value: redeemedPoints }
];

annotate loyaltySrv.Customer with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: firstName },
    { $Type: 'UI.DataField', Value: lastName },
    { $Type: 'UI.DataField', Value: email },
    { $Type: 'UI.DataField', Value: totalPoints },
    { $Type: 'UI.DataField', Value: totalPurchaseValue },
    { $Type: 'UI.DataField', Value: numberOfPurchases },
    { $Type: 'UI.DataField', Value: redeemedPoints }
  ]
};

annotate loyaltySrv.Customer with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

annotate loyaltySrv.Purchase with @UI.HeaderInfo: { TypeName: 'Purchase', TypeNamePlural: 'Purchases', Title: { Value: purchaseId } };
annotate loyaltySrv.Purchase with {
  ID @Common.Text: { $value: purchaseId, ![@UI.TextArrangement]: #TextOnly }
};
annotate loyaltySrv.Purchase with @UI.Identification: [{ Value: purchaseId }];
annotate loyaltySrv.Purchase with {
  purchaseId @title: 'Purchase ID';
  customerId @title: 'Customer ID';
  purchaseValue @title: 'Purchase Value';
  pointsEarned @title: 'Points Earned';
  redeemedPoints @title: 'Redeemed Points'
};

annotate loyaltySrv.Purchase with @UI.LineItem: [
    { $Type: 'UI.DataField', Value: purchaseId },
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: purchaseValue },
    { $Type: 'UI.DataField', Value: pointsEarned },
    { $Type: 'UI.DataField', Value: redeemedPoints }
];

annotate loyaltySrv.Purchase with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
    { $Type: 'UI.DataField', Value: purchaseId },
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: purchaseValue },
    { $Type: 'UI.DataField', Value: pointsEarned },
    { $Type: 'UI.DataField', Value: redeemedPoints }
  ]
};

annotate loyaltySrv.Purchase with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

