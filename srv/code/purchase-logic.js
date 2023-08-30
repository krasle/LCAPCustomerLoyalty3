/**
 * Find the customer the the matching customer ID. Increase the customer's total purchase points by one point for each 10 dollars of the purchase value. Calculate the reward as the difference between customer's updated total purchase points and the customer's redeemed purchase points, round by 100. If the reward is more than 0 then add the reward to the redeemed points and show an info message "customer (email) gets a coupon for 100 points!", replacing the word customer with the real customer name and 100 by the reward and email by the real customer email. Regardless of the value of the reward, update the new total purchase value. Record the Purchase's earned points and the redeemed points with the value of the reward.
 * @On(event = { "CREATE" }, entity = "loyaltySrv.Purchase")
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