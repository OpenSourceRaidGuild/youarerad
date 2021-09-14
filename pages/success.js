import { useEffect, useState } from 'react'

export default function Success() {
  const [successState, setSuccessState] = useState(false)
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      setSuccessState(true)
    }
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [])

  return <div>{successState ? <div>success</div> : <div>oof</div>}</div>
}
