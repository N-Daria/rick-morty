export interface PageState {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: CharacterState[]
}

export interface CharacterState {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string; url: string }
  location: { name: string; url: string }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface EpisodeState {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
