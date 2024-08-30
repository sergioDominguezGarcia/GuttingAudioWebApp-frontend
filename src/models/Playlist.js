async function getAccessToken() {
  const clientId = 'your_spotify_client_id'
  const clientSecret = 'your_spotify_client_secret'
  const tokenUrl = 'https://accounts.spotify.com/api/token'

  const headers = new Headers()
  headers.append(
    'Authorization',
    'Basic ' + btoa(`${clientId}:${clientSecret}`)
  )
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
    return data.access_token // Regresa el access token
  } catch (error) {
    console.error('Error obtaining access token:', error)
  }
}

async function fetchPlaylists(accessToken) {
  try {
    const userId = '31f4v7jjcbm7zbuyzj3ntniapqmq' // ID del usuario objetivo
    const response = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch playlists')
    }

    const playlists = await response.json()
    console.log(playlists)
    renderPlaylists(playlists)
  } catch (error) {
    console.error('Error fetching playlists:', error)
  }
}

// Llamada inicial para obtener el token y luego las playlists
async function loadPlaylists() {
  const accessToken = await getAccessToken()
  if (accessToken) {
    await fetchPlaylists(accessToken)
  }
}

// Llama a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', loadPlaylists)


function renderPlaylists(playlists) {
  const playlistsContainer = document.getElementById('playlists-container')
  playlistsContainer.innerHTML = ''

  playlists.items.forEach((playlist) => {
    const playlistElement = document.createElement('div')
    playlistElement.className = 'playlist'
    playlistElement.innerHTML = `
      <img src="${playlist.images[0].url}" alt="${playlist.name}">
      <p>${playlist.name}</p>
    `
    playlistsContainer.appendChild(playlistElement)
  })
}