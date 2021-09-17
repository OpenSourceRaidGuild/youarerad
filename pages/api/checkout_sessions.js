import Stripe from 'stripe'

const stripe = new Stripe.default(process.env.STRIPE_SECRET_KEY, {})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = req.body.amount.value

    try {
      const params = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'Donation',
            amount: amount,
            currency: 'usd',
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/donationcomplete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      }
      const checkoutSession = await stripe.checkout.sessions.create(params)
      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: err.message,
      })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
