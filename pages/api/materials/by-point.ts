import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import type { NextApiRequest, NextApiResponse } from 'next'

import { DBMaterial } from '@/lib/models'

import { db } from '@/lib'

type Data =
  | DBMaterial[]
  | {
      message: string
    }

const getMaterialsByPoint = async (pointId: string) => {
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

const getDBMaterials = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { pointId } = req.body

  if (!pointId) {
    return res
      .status(401)
      .json({ message: 'Point id is necessary to get the materials' })
  }

  const data = await getMaterialsByPoint(pointId)

  return res.status(200).json(data)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getDBMaterials(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}
