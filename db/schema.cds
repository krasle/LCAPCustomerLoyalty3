namespace loyalty;

entity Customer {
  key ID: UUID;
  customerId: String(50);
  firstName: String(190);
  lastName: String(190);
  email: String(200);
  totalPoints: Integer;
  totalPurchaseValue: Integer;
  numberOfPurchases: Integer;
  redeemedPoints: Integer;
}

entity Purchase {
  key ID: UUID;
  purchaseId: String(50);
  customerId: String(50);
  purchaseValue: Integer;
  pointsEarned: Integer;
  redeemedPoints: Integer;
}

