import React, { useState, useEffect } from 'react'
import './styles.css'
import Player from '../Player'
const Playlists = () => {
  const [playlistData, setPlaylistData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken()
        if (accessToken) {
          const data = await fetchPlaylistData(accessToken)
          setPlaylistData(data)
        }
      } catch (error) {
        setError('Error fetching playlist data')
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  const getAccessToken = async () => {
    const clientId = '7514e126113b4878b6ec694ec42d39d7'
    const clientSecret = '0c332d98d80a4c97880fc2dd21db26b8'
    const tokenUrl = 'https://accounts.spotify.com/api/token'

    const headers = new Headers()
    const authString = `${clientId}:${clientSecret}`
    const base64AuthString = btoa(authString)

    headers.append('Authorization', `Basic ${base64AuthString}`)
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    const body = new URLSearchParams()
    body.append('grant_type', 'client_credentials')

    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: headers,
        body: body,
      })

      if (!response.ok) {
        throw new Error('Failed to retrieve access token')
      }

      const data = await response.json()
      return data.access_token
    } catch (error) {
      console.error('Error obtaining access token:', error)
      throw error
    }
  }

  const fetchPlaylistData = async (accessToken) => {
    const playlistId = '4BpgbYHLTSgaWYqcfysUKv' // ID de la lista de reproducción

    try {
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      if (!playlistResponse.ok) {
        throw new Error('Failed to fetch playlist data')
      }

      const playlistData = await playlistResponse.json()

      // Procesar y extraer la información relevante
      const tracks = playlistData.tracks.items.map((item) => {
        const track = item.track
        return {
          id: track.id,
          name: track.name,
          album: track.album.name,
          artist: track.artists.map((artist) => artist.name).join(', '),
          preview_url: track.preview_url,
          album_image: track.album.images[0].url,
        }
      })

      return {
        playlistName: playlistData.name,
        tracks: tracks,
      }
    } catch (error) {
      console.error('Error fetching playlist data:', error)
      throw error
    }
  }

  return (
    <div id="box">
      {error && <p>{error}</p>}
      {playlistData ? (
        <div id='card'> 
          
          {playlistData.tracks.map((track) => (
            <Player key={track.id} track={track} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Playlists
