import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { fetchTracks } from '../../services/db'

const Player = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await fetchTracks() // La respuesta completa de la API
        console.log(response) // Muestra la respuesta en consola
        setTracks(response.tracks) // Asignamos solo el array de tracks
      } catch (error) {
        console.error('Error fetching tracks:', error)
      }
    }

    getTracks()
  }, [])

  return (
    <S.PlayerContainer>
      {tracks.map((track) => (
        <S.TrackCard key={track._id}>
          <S.TrackInfo>
            <S.Artist>{track.artist.replace(/['"]+/g, '')}</S.Artist>
            <S.Title>{track.title.replace(/['"]+/g, '')}</S.Title>
            {track.album && (
              <S.Album>{track.album.replace(/['"]+/g, '')}</S.Album>
            )}
          </S.TrackInfo>
          <S.Audio controls>
            <source src={track.s3Url} type="audio/wav" />
            Your browser does not support the audio element.
          </S.Audio>
        </S.TrackCard>
      ))}
    </S.PlayerContainer>
  )
}

export default Player
