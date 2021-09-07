import { useState } from 'react'
import Ctahover from '../../lotties/cta.js'
import { fetchPostJSON } from '../../utils/api-helpers.js'
import { getStripe } from '../../utils/Get-stripe.js'

export default function DonateGuild() {
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
      <form
        onSubmit={handleSubmit}
        className="relative p-10 text-black border rounded-xl bg-gray-50"
      >
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid items-center grid-cols-3 gap-5 min-w-max"
        >
          <div className="relative">
            <input
              type="radio"
              name="donation"
              value="price_1JVIvnEavBxf0OLSGhqDWyox"
              id="100"
              onChange={handleInputChange}
            />
            <label className="relative radio-label" htmlFor="100">
              $10
            </label>
          </div>
          <input
            type="radio"
            name="donation"
            value="price_1JVIvnEavBxf0OLSeJ01R6FH"
            id="300"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="300">
            $30
          </label>
          <input
            type="radio"
            name="donation"
            value="price_1JVIvnEavBxf0OLSydjaIyU6"
            id="600"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="600">
            $60
          </label>
          <input
            type="radio"
            name="donation"
            value="price_1JVIvnEavBxf0OLSTNaZEI7e"
            id="1200"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="1200">
            $120
          </label>
        </div>
        <div></div>
        <button
          disabled={loading}
          type="submit"
          className="relative w-full col-span-3 p-2 mx-auto mt-10 overflow-hidden text-xl transition-all duration-300 ease-linear bg-white border-2 border-black fitems-center lg:mx-0 rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
        >
          <span className="relative z-10 w-full font-bold text-center">Join Today!</span>
          <div className="absolute top-0 z-0">
            <Ctahover />
          </div>
        </button>
      </form>
    </div>
  )
}
