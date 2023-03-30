import { DBMaterial } from '@/interfaces'
import { getMaterialsByPoint } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | DBMaterial[]
  | {
      message: string
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
