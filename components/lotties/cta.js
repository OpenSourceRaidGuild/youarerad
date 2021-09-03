import Lottie from 'react-lottie-player'
import cta from './cta.json'

export default function Ctahover() {
  return <Lottie loop animationData={cta} play style={{ width: '100%', height: '100%' }} />
}