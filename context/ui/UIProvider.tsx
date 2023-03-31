import { FC, PropsWithChildren, useReducer } from 'react'
import { UiContext, uiReducer } from '.'
import { DBMaterial, DBPoint, Layers } from '@/models'
import { apiInstance } from '@/services'

export interface UiState {
  isMaterialSelectorOpen: boolean
  currentPointer: DBPoint
  pointerMaterials: DBMaterial[]
  layers: Layers
}

const UI_INITIAL_STATE: UiState = {
  isMaterialSelectorOpen: false,
  currentPointer: {} as DBPoint,
  pointerMaterials: [],
  layers: {} as Layers
}

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setSelectedPoint = async (payload: DBPoint) => {
    const { data } = await apiInstance.post<DBMaterial[]>(
      '/materials/by-point',
      {
        pointId: payload.id
      }
    )

    dispatch({ type: 'SET_SELECTED_POINT', payload })
    dispatch({ type: 'SET_SELECTED_POINT_MATERIALS', payload: data })
  }

  const toggleMaterialSelector = () => dispatch({ type: 'TOGGLE_IS_SELECTING' })

  const closeMaterialSelector = () => dispatch({ type: 'CLOSE_IS_SELECTING' })

  // Handle layers
  const setLayerPoint = (layer: Layers) =>
    dispatch({ type: 'SET_LAYERS', payload: layer })

  return (
    <UiContext.Provider
      value={{
        ...state,

        // actions
        setSelectedPoint,
        toggleMaterialSelector,
        setLayerPoint,
        closeMaterialSelector
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
