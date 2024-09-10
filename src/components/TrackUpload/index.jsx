import React, { useState } from 'react'
import { uploadTrack } from '../services/trackService'

const TrackUpload = () => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState('borrador')
  const [message, setMessage] = useState('')

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('track', file)
    formData.append('title', title)
    formData.append('artist', artist)
    formData.append('genre', genre)
    formData.append('duration', duration)
    formData.append('price', price)
    formData.append('status', status)

    try {
      const response = await uploadTrack(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage('Error uploading track')
    }
  }

  return (
    <div>
      <h1>Upload Track</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist"
          required
        />
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          placeholder="Album"
          required
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (seconds)"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default TrackUpload
