import ReactPlayer from 'react-player'

export default function Videoplayer({ videoUrl }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        playsinline={true}
        playing={true}
        width="100%"
        height="100%"
        controls={false}
        muted={true}
        loop={true}
        url={videoUrl}
      />
    </div>
  )
}
