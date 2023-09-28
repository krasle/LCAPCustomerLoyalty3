/**
 * 
 * @On(event = { "CREATE" }, entity = "CustomersLoyaltyService.Purchase")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { data } = request;
    const tx = cds.transaction(request);
    const customers = await tx.run(SELECT.from('loyaltySrv.Customer').where({ customerId: data.customerId }));
    const customer = customers[0];

    if (!customer) {
        request.error(404, `Customer with ID ${data.customerId} not found`);
        return;
    }

    const pointsEarned = Math.floor(data.purchaseValue / 10);
    customer.totalPoints += pointsEarned;
    customer.totalPurchaseValue += data.purchaseValue;
    customer.numberOfPurchases += 1;

    const reward = Math.floor((customer.totalPoints - customer.redeemedPoints) / 100) * 100;
    if (reward > 0) {
        customer.redeemedPoints += reward;
        request.info(`Customer ${customer.firstName} ${customer.lastName} (${customer.email}) gets a coupon for ${reward} points!`);
    }

    await tx.run(UPDATE('loyaltySrv.Customer').set(customer).where({ ID: customer.ID }));

    data.pointsEarned = pointsEarned;
    data.redeemedPoints = reward;

    return data;
};