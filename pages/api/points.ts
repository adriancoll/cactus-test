import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '@/lib/firebase'
import { DBPoint } from '@/lib/models'
import { getCollectionData } from '@/lib/helpers'

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
