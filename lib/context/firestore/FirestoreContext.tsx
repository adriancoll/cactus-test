import { DBMaterial, DBPoint } from '@/lib/models'
import { createContext } from 'react'

interface ContextProps {
  points: DBPoint[]
  materials: DBMaterial[]

  loading: boolean
}

export const FirestoreContext = createContext({} as ContextProps)
