import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { firestoreReducer } from './firestoreReducer'
import { FirestoreContext } from './FirestoreContext'
import { Materials, Points } from '@/interfaces'
import { db, getCollectionData } from '@/lib'

export interface FirestoreState {
  points: Points[]
  materials: Materials[]

  loading: boolean
}

const FIRESTORE_INITIAL_STATE: FirestoreState = {
  points: [],
  materials: [],

  loading: false
}

export const FirestoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    firestoreReducer,
    FIRESTORE_INITIAL_STATE
  )

  useEffect(() => {
    const fetchData = async () => {
      const [materials, points] = await Promise.all([
        getCollectionData<Materials>(db, 'materials'),
        getCollectionData<Points>(db, 'points')
      ])

      dispatch({ type: 'SET_MATERIALS', payload: materials })
      dispatch({ type: 'SET_POINTS', payload: points })
    }
    fetchData()
  }, [])

  return (
    <FirestoreContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </FirestoreContext.Provider>
  )
}
