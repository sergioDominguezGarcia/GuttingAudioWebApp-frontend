import React from 'react'
import { track } from '../../models/track'

const TrackDetails = ({ track }) => {
  if (!track) return <p>No track data available</p>

  return (
    <div>
      <h1>{track.title}</h1>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
      <p>Duration: {track.duration} seconds</p>
      <p>Price: ${track.price.toFixed(2)}</p>
      <p>Created At: {new Date(track.createdAt).toLocaleDateString()}</p>
      <a href={track.s3Url} target="_blank" rel="noopener noreferrer">
        Listen to the track
      </a>
    </div>
  )
}

export default TrackDetails
