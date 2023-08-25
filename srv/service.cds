using { loyalty } from '../db/schema.cds';

@path : '/service/loyalty'
service loyaltySrv {
  entity Customer as projection on loyalty.Customer;
  entity Purchase as projection on loyalty.Purchase;
}