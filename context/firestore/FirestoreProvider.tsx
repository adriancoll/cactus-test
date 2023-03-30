import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { firestoreReducer } from './firestoreReducer'
import { FirestoreContext } from './FirestoreContext'
import { DBMaterial, DBPoint } from '@/interfaces'
import { apiInstance } from '@/services'

export interface FirestoreState {
  points: DBPoint[]
  materials: DBMaterial[]

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
      dispatch({ type: 'SET_LOADING', payload: true })

      /* @deprecated Old version with firestore */
      // const [materials, points] = await Promise.all([
      //   getCollectionData<DBMaterial>(db, 'materials'),
      //   getCollectionData<DBPoint>(db, 'points')
      // ])

      const [pointsRef, materialsRef] = await Promise.all([
        apiInstance.get<DBPoint[]>('/points'),
        apiInstance.get<DBMaterial[]>('/materials')
      ])

      dispatch({ type: 'SET_MATERIALS', payload: materialsRef.data })
      dispatch({ type: 'SET_POINTS', payload: pointsRef.data })
      dispatch({ type: 'SET_LOADING', payload: false })
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
