import { initializeApp } from 'firebase/app'
import {
  Firestore,
  collection,
  getFirestore,
  getDocs,
  query,
  where
} from 'firebase/firestore/lite'
import config from './config'
import { CollectionNames, DBMaterial } from '@/interfaces'

const app = initializeApp(config)

export const db = getFirestore(app)

export const getMaterialsByPoint = async (pointId: string) => {
  const materialsRef = collection(db, 'materials')

  const q = query(materialsRef, where('points', '==', [pointId]))
  const querySnapshot = await getDocs(q)

  const materials: DBMaterial[] = []

  // Iteramos sobre los resultados de la consulta y agregamos cada material a un arreglo
  querySnapshot.forEach((doc) => {
    const material = doc.data() as DBMaterial
    material.id = doc.id
    materials.push(material)
  })

  return materials
}

export const getCollectionData = async <T>(
  db: Firestore,
  collectionName: CollectionNames
) => {
  const collections = collection(db, collectionName)
  const snapshot = await getDocs(collections)
  const dataList = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataList as T[]
}
