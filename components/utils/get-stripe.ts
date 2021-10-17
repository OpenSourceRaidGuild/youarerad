import { loadStripe } from '@stripe/stripe-js'

declare const stripe: {
  loadStripe: typeof loadStripe
};

let stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = stripe.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export default getStripe
