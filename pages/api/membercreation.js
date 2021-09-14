import { stripe } from '../../components/utils/stripe.js'
import { supabase } from '../../components/utils/supabaseClient.js'

export const config = {
  api: {
    bodyParser: false,
  },
}

async function buffer(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

const relevantEvents = new Set(['checkout.session.completed'])

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    let event

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
    } catch (err) {
      console.log('Error message: ${err.message}')
      return res.status(400).send('Webhook Error: ${err.message}')
    }

    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case 'checkout.session.completed':
            const checkoutSession = event.data.object
            if (checkoutSession.mode === 'subscription') {
              const subscriptionId = checkoutSession.subscription
              let { data, error } = await supabase.from('guild').insert({ id: subscriptionId })
              checkoutSession.customer, true
            }
          default:
            throw new Error('Unhandled relevant event')
        }
      } catch (error) {
        console.log(error)
        return res.status(400).send('Webhook error: "Webhook handler failed"')
      }
    }
    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default webhookHandler
