export interface Message {
  id: string
  text: string
  isUser?: boolean
}

export interface Response {
  about: string[]
  sideProjects: string[]
  workExperience: string[]
}

