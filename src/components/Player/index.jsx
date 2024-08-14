import React, { useEffect, useRef } from 'react'

const SoundCloudPlayer = ({ playlistUrl, autoPlay = false }) => {
  const iframeRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://w.soundcloud.com/player/api.js'
    script.onload = () => {
      const widget = window.SC.Widget(iframeRef.current)
      widget.bind(window.SC.Widget.Events.READY, () => {
        console.log('Widget ready')
        if (autoPlay) {
          widget.play()
        }
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [autoPlay])

  return (
    <div>
      <iframe
        ref={iframeRef}
        width="80%"
        height="250rem"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          playlistUrl
        )}&auto_play=${autoPlay}&color=%2314161d&show_artwork=false&show_playcount=false&show_user=false&visual=false`}
      ></iframe>
    </div>
  )
}

export default SoundCloudPlayer
