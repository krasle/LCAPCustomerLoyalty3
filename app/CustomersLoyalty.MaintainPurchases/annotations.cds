using CustomersLoyaltyService as service from '../../srv/service1';

annotate service.Purchase with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'purchaseId',
            Value : purchaseId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'customerId',
            Value : customerId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'purchaseValue',
            Value : purchaseValue,
        },
        {
            $Type : 'UI.DataField',
            Label : 'pointsEarned',
            Value : pointsEarned,
        },
        {
            $Type : 'UI.DataField',
            Label : 'redeemedPoints',
            Value : redeemedPoints,
        },
    ]
);
annotate service.Purchase with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'purchaseId',
                Value : purchaseId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'customerId',
                Value : customerId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'purchaseValue',
                Value : purchaseValue,
            },
            {
                $Type : 'UI.DataField',
                Label : 'pointsEarned',
                Value : pointsEarned,
            },
            {
                $Type : 'UI.DataField',
                Label : 'redeemedPoints',
                Value : redeemedPoints,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
