import { DBPoint } from '@/models'
import { FC } from 'react'
import { FingerPrint } from './icons'
import { useUI } from '@/hooks/useUI'

interface Props {
  point: DBPoint
}

export const CoordPoint: FC<Props> = ({ point }) => {
  const { setSelectedPoint, isMaterialSelectorOpen } = useUI()

  const onClick = () => setSelectedPoint(point)

  const animationClass = isMaterialSelectorOpen
    ? 'scale-0 opacity-0'
    : 'scale-100 opacity-1'

  return (
    <div
      style={{
        top: `${point.coordY}%`,
        right: `${point.coordY}%`
      }}
      title={`Seleccionar ${point.name}`}
      onClick={onClick}
      className={`group transition hover:opacity-40 absolute p-1 cursor-pointer rounded-full bg-black/50 z-30 ${animationClass}`}
    >
      <div className="group-hover:scale-125 transition border-2 text-white rotate-12 border-white p-2 rounded-full">
        <FingerPrint />
      </div>
    </div>
  )
}
