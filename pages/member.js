import Stripe from 'stripe'
import Login from '../components/guildportal/login.js'

const stripe = new Stripe.default(process.env.STRIPE_SECRET_KEY, {})

export default function member() {
  return (
    <div>
      <Login />
    </div>
  )
}
