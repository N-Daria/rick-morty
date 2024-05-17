const baseUrl = 'https://rickandmortyapi.com/api'

export async function getCards(url: string) {
  const response = await fetch(`${baseUrl}/${url}`)

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  return response.json()
}
