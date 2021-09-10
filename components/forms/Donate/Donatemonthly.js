import Link from 'next/dist/client/link'
import React, { useState } from 'react'
import Ctahover from '../../lotties/cta.js'
import { fetchPostJSON } from '../../utils/api-helpers.js'
import getStripe from '../../utils/get-stripe.js'

export default function Donatemonthly() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState()

  const handleInputChange = (e) => {
    const value = e.target.value
    setInput({
      ...input,
      value,
    })
  }

  console.log(input)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON('/api/checkout_sessionsM', {
      amount: input,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    })
    console.warn(error.message)
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative p-10 border rounded-xl bg-gray-50">
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid items-center grid-cols-3 gap-4 auto-cols-fr"
        >
          <input
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS7wmeK3rS"
            id="100"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="100">
            $10
          </label>

          <input
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS1NQzttQR"
            id="300"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="300">
            $30
          </label>
          <input
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS9LMxBJKd"
            id="600"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="600">
            $60
          </label>
          <input
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLSUbTR8x93"
            id="1200"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="1200">
            $120
          </label>
          <div className="col-span-2 transition-all duration-300 cursor-pointer ">
            <div className="">
              <Link href="https://www.twitch.tv/subs/youarerad">
                <a className="relative z-10 items-center justify-center block w-full p-4 mx-auto font-bold text-center align-middle bg-white border cursor-pointer rounded-xl h-14 hover:text-white hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-2xl hover:bg-clip-border hover:drop-shadow-xl group">
                  <label className="block text-sm font-bold text-center cursor-pointer group-hover:text-white">
                    Donate Twitch Sub
                  </label>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="relative items-center w-full col-span-3 p-2 mx-auto mt-10 overflow-hidden text-xl transition-all duration-300 ease-linear bg-white border-2 border-black lg:mx-0 rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
        >
          <span className="relative z-10 w-full font-bold text-center">Donate</span>
          <div className="absolute top-0 z-0">
            <Ctahover />
          </div>
        </button>
      </form>
    </div>
  )
}
