const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_pmcZQXjdn61j5j6NgWI4x6yp'; //live:test

export default STRIPE_PUBLISHABLE;