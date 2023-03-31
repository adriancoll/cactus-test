import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import config from './config'

const app = initializeApp(config)

export const db = getFirestore(app)
