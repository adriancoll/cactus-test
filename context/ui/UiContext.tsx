import { DBMaterial, DBPoint, Layers } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  isMaterialSelectorOpen: boolean
  currentPointer: DBPoint
  pointerMaterials?: DBMaterial[]
  layers: Layers

  // Points
  setSelectedPoint: (point: DBPoint) => Promise<void>
  setLayerPoint: (layer: Layers) => void

  // Material selector
  toggleMaterialSelector: () => void
  closeMaterialSelector: () => void
}

export const UiContext = createContext({} as ContextProps)
