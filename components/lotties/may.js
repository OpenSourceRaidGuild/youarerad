import { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

const Mayhover = () => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    import('./May.json').then(setAnimationData)
  }, [])

  if (!animationData) return <div>Loading...</div>
  return <Lottie animationData={animationData} play style={{ width: '100%', height: '100%' }} />
}

export default Mayhover
