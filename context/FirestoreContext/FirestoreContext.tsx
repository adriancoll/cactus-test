import { Materials, Points } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  points: Points[]
  materials: Materials[]

  loading: boolean
}

export const FirestoreContext = createContext({} as ContextProps)
