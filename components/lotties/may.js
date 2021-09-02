import Lottie from 'react-lottie-player'
import May from './May.json'

export default function Mayhover() {
  return <Lottie loop animationData={May} play style={{ width: '100%', height: '100%' }} />
}
