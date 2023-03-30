import { FC, PropsWithChildren, useReducer } from 'react'
import { UiContext, uiReducer } from '.'
import { DBMaterial, DBPoint } from '@/interfaces'
import { getMaterialsByPoint } from '@/lib/firestore'

export interface UiState {
  isSideMenuOpen: boolean
  currentPointer: DBPoint
  pointerMaterials: DBMaterial[]
}

const UI_INITIAL_STATE: UiState = {
  isSideMenuOpen: false,
  currentPointer: {} as DBPoint,
  pointerMaterials: []
}

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setSelectedPoint = async (payload: DBPoint) => {
    const materials = await getMaterialsByPoint(payload.id)

    dispatch({ type: 'SET_SELECTED_POINT', payload })
    dispatch({ type: 'SET_SELECTED_POINT_MATERIALS', payload: materials })
  }

  const toggleSideMenu = () => dispatch({ type: 'TOGGLE_IS_SELECTING' })

  return (
    <UiContext.Provider
      value={{
        ...state,

        // actions
        setSelectedPoint,
        toggleSideMenu
      }}
    >
      {children}
    </UiContext.Provider>
  )
}