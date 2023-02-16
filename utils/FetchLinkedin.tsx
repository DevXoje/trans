// import 'server-only'
// import { cache } from 'react'
// Configuración de la solicitud de autenticación

const authConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: `${process.env.LINKEDIN_CLIENT_ID}:${process.env.LINKEDIN_CLIENT_SECRET}`
}
export const preloadLinkedin = () => {
  // eslint-disable-next-line no-void
  void getLinkedin()
}

export const getLinkedin = async () => {
}

// Configuración de la solicitud de autenticación

// Función que solicita un token de acceso de LinkedIn
async function getLinkedInAccessToken (): Promise<string> {
  const authData = {
    grant_type: 'client_credentials',
    scope: 'r_liteprofile'
  }

  try {
    const response = await fetch('',
      {
        ...authConfig,
        body: 'grant_type=client_credentials&scope=r_liteprofile'
      }
    )

    if (!response.ok) {
      throw new Error(`Error de solicitud de autenticación de LinkedIn: ${response.statusText}`)
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error(error)
    return 'null'
  }
}

// Función que obtiene los datos de perfil de LinkedIn
async function getLinkedInProfile (): Promise<object> {
  const accessToken = await getLinkedInAccessToken()
  try {
    const response = await fetch(
      'https://api.linkedin.com/v2/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Error de solicitud de perfil de LinkedIn: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    return { null: 'null' }
  }
}

// Llamada a la función principal
export async function main () {
  const profileData = await getLinkedInProfile()
  return { profileData }
}
