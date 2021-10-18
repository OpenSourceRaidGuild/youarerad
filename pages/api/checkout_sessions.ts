import Stripe from 'stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2020-08-27' })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const amount = req.body.amount.value

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
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
    } catch (err: any) {
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
