import { ModelNames } from '@/models'
import { Firestore, collection, getDocs } from 'firebase/firestore/lite'

export const getCollectionData = async <T>(
  db: Firestore,
  collectionName: ModelNames
) => {
  const collections = collection(db, collectionName)
  const snapshot = await getDocs(collections)
  const dataList = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataList as T[]
}
