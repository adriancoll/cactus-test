import { DBPoint } from '@/interfaces'
import { db, getCollectionData } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | DBPoint[]
  | {
      message: string
    }

const getDBPoints = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data = await getCollectionData<DBPoint>(db, 'points')

  return res.status(200).json(data)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getDBPoints(req, res)

    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}