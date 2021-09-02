import { loadStripe, stripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_k9y7PjN6bsvzBcH5cX2gXUKg')

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = stripe.loadStripe('pk_test_k9y7PjN6bsvzBcH5cX2gXUKg')
  }
  return stripePromise
}

export default getStripe
