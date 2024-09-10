const API_URL = 'http://localhost:8080' // Cambia esto por la URL de tu API

export const fetchTracks = async () => {
  const response = await fetch(`${API_URL}/tracks`)
  if (!response.ok) {
    throw new Error('Failed to fetch tracks')
  }
  return response.json()
}

export const fetchTrackById = async (id) => {
  const response = await fetch(`${API_URL}/tracks/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch track')
  }
  return response.json()
}

export const uploadTrack = async (formData) => {
  const response = await fetch(`${API_URL}/tracks/upload`, {
    method: 'POST',
    body: formData,
  })
  if (!response.ok) {
    throw new Error('Failed to upload track')
  }
  return response.json()
}
