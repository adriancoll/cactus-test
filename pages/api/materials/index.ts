import { DBMaterial } from '@/models'
import { db } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getCollectionData } from '@/lib/firebase'

type Data =
  | DBMaterial[]
  | {
      message: string
    }

const getDBMaterials = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const data = await getCollectionData<DBMaterial>(db, 'materials')

  return res.status(200).json(data)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getDBMaterials(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}
