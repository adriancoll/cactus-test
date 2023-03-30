import { DBMaterial, DBPoint, Layers } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean
  currentPointer: DBPoint
  pointerMaterials?: DBMaterial[]
  layers: Layers

  setSelectedPoint: (point: DBPoint) => Promise<void>
  toggleSideMenu: () => void
  setLayerPoint: (layer: Layers) => void
}

export const UiContext = createContext({} as ContextProps)
