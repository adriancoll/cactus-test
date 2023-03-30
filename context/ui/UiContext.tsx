import { DBMaterial, DBPoint } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean
  currentPointer: DBPoint
  pointerMaterials?: DBMaterial[]

  setSelectedPoint: (point: DBPoint) => Promise<void>
  toggleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
