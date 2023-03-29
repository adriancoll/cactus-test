import { useContext } from 'react'
import { FirestoreContext } from '@/context'

export const useFirestore = () => useContext(FirestoreContext)
