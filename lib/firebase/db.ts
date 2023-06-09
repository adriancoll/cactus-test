import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { firebaseConfig } from '@/lib/constants'

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
