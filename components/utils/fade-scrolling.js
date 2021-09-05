import { useRef, useState } from 'react'
import { useIntersection } from './useintersection.js'

export default function Fadescrolling({ children, videos }) {
  const ScrollerContainerRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(0)

  useIntersection(
    ScrollerContainerRef,
    'h3',
    (entry, idx) => {
      if (entry.intersectionRatio === 1) {
        setActiveVideo(idx)
      }
    },
    { threshold: 1, rootMargin: '0px 0px -50% 0px' }
  )

  const video = videos[activeVideo]
  return (
    <div className="items-start sm:grid sm:grid-cols-2 sm:gap-10">
      <div ref={ScrollerContainerRef} className="pt-10 sm:col-start-1">
        {children}
      </div>
      <div className="hidden sm:sticky sm:flex sm:col-start-2 sm:top-10">{video}</div>
    </div>
  )
}
