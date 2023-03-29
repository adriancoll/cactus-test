import { Materials, Points } from '@/interfaces'
import { FirestoreState } from './FirestoreProvider'

type FirestoreAction =
  | { type: 'SET_POINTS'; payload: Points[] }
  | { type: 'SET_MATERIALS'; payload: Materials[] }
  | { type: 'SET_LOADING'; payload: boolean }

export const firestoreReducer = (
  state: FirestoreState,
  action: FirestoreAction
): FirestoreState => {
  switch (action.type) {
    case 'SET_POINTS':
      return { ...state, points: action.payload }
    case 'SET_MATERIALS':
      return { ...state, materials: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
