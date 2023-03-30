import { DBPoint } from '@/interfaces'
import { FC } from 'react'
import { FingerPrint } from './icons'
import { useUI } from '@/hooks/useUI'

interface Props {
  point: DBPoint
}

export const CoordPoint: FC<Props> = ({ point }) => {
  const { setSelectedPoint } = useUI()

  const onClick = () => setSelectedPoint(point)

  return (
    <div
      style={{
        top: `${point.coordY}%`,
        right: `${point.coordY}%`
      }}
      title={`Seleccionar ${point.name}`}
      onClick={onClick}
      className="animate-fadeInScale group hover:opacity-40 transition absolute p-1 cursor-pointer rounded-full bg-black/50 z-30"
    >
      <div className="group-hover:scale-125 transition border-2 text-white rotate-12 border-white p-2 rounded-full">
        <FingerPrint />
      </div>
    </div>
  )
}
