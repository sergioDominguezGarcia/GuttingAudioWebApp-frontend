import { useEffect, useState } from 'react'
import { fetchTracks } from '../../services/db'

const TrackList = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const data = await fetchTracks()
        setTracks(data.tracks)
      } catch (error) {
        console.error('Error fetching tracks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTracks()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            <a href={track.s3Url} target="_blank" rel="noopener noreferrer">
              Listen
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrackList
