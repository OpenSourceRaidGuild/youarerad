import { CloudinaryContext, Video } from 'cloudinary-react'
import { useRef } from 'react'

const VideoPlayer = ({ publicId }) => {
  const videoRef = useRef()
  return (
    <CloudinaryContext cloud_name="df23ubjbb">
      <div>
        <Video
          playsinline={true}
          muted={true}
          publicId={publicId}
          loop={true}
          autoplay="on-scroll"
          controls={false}
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  )
}

export default VideoPlayer
