const stripe = require('../constants/stripe');
  
// product created at stripe: prod_Eb44WqxV6oFB1O
// plan created at stripe: plan_Eb44FSuAEk3YZE
  
// let email = "test@example.com";
// let existingCustomers = await stripe.customers.list({email : email});
// if(existingCustomers.data.length){
//     // don't create customer
// }else{
//     let customer = await stripe.customers.create({
//         email : email
//     });
// }
  
  

  const customer = stripe.customers.create({
    description: 'New Test Customer for services@centraflux.com',
    email: 'services@centraflux.com',
    source: "tok_mastercard"
  });

//   const subscription = stripe.subscriptions.create({
//     customer: customer.id,
//     items: [{plan: 'plan_Eb44FSuAEk3YZE'}],
//   });

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {

    
    
    //   console.log("Customer: ", customer)

  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    //   console.log("customer.id: ", customer.id)
    // stripe.charges.create(req.body, postStripeCharge(res));
    stripe.subscriptions.create({
        customer: "cus_Eb5Fb9atAOKAcu",
        items: [{plan: 'plan_Eb44FSuAEk3YZE'}],
      });
  });

  return app;
};

module.exports = paymentApi;