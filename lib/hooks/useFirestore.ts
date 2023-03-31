import { useContext } from 'react'
import { FirestoreContext } from '@/lib/context'

export const useFirestore = () => useContext(FirestoreContext)
