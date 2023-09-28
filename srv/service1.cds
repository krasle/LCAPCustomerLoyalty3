using loyalty from '../db/schema';

@path : '/service/CustomersLoyalty'
service CustomersLoyaltyService
{
    @odata.draft.enabled
    entity Customer as
        projection on loyalty.Customer;

    @odata.draft.enabled
    entity Purchase as
        projection on loyalty.Purchase;
}
