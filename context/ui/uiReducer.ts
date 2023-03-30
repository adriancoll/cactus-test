import { DBMaterial, DBPoint, Layers } from '@/interfaces'
import { UiState } from './'

type UiActionType =
  | { type: 'TOGGLE_IS_SELECTING' }
  | { type: 'SET_SELECTED_POINT'; payload: DBPoint }
  | { type: 'SET_SELECTED_POINT_MATERIALS'; payload: DBMaterial[] }
  | { type: 'SET_LAYERS'; payload: Layers }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case 'TOGGLE_IS_SELECTING':
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen
      }
    case 'SET_SELECTED_POINT':
      if (!state.isSideMenuOpen) state.isSideMenuOpen = true

      return {
        ...state,
        currentPointer: action.payload
      }
    case 'SET_SELECTED_POINT_MATERIALS':
      if (!state.isSideMenuOpen) state.isSideMenuOpen = true
      return {
        ...state,
        pointerMaterials: action.payload
      }
    case 'SET_LAYERS':
      return { ...state, layers: { ...state.layers, ...action.payload } }

    default:
      return state
  }
}
