import Lottie from '@rookino/react-lottie-light'
import May from './May.json'

const Mayhover = () => {
  const defaultOptions = {
    animationData: May,
    loop: true,
    autoplay: true,
    renderSettings: {
      progressiveLoad: true,
    },
  }

  return (
    <>
      <Lottie options={defaultOptions} />
    </>
  )
}

export default Mayhover
