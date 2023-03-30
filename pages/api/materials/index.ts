import { DBMaterial } from '@/interfaces'
import { db, getCollectionData, getMaterialsByPoint } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      data: DBMaterial[]
    }
  | {
      message: string
    }

const getDBMaterials = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const data = await getCollectionData<DBMaterial>(db, 'materials')

  return res.status(200).json({ data })
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      getDBMaterials(req, res)
      break

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}
