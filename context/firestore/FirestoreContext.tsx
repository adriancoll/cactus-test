import { DBMaterial, DBPoint } from '@/models'
import { createContext } from 'react'

interface ContextProps {
  points: DBPoint[]
  materials: DBMaterial[]

  loading: boolean
}

export const FirestoreContext = createContext({} as ContextProps)
