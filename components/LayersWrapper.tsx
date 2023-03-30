import { useUI } from '@/hooks/useUI'
import Image from 'next/image'
import { CoordPoint } from './CoordPoint'
import { useFirestore } from '@/hooks/useFirestore'

const IMAGE_WIDTH = 1240
const IMAGE_HEIGHT = 873

export const LayersWrapper = () => {
  const { points } = useFirestore()
  const { layers } = useUI()

  return (
    <div className="flex">
      {/* material selector points */}
      {points.map((point) => (
        <CoordPoint key={point.name} point={point} />
      ))}
      <div className="rounded-3xl relative overflow-hidden w-fit">
        {/*  background image */}
        <Image
          className="select-none object-contain pointer-events-none"
          priority
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          src="/images/base.jpeg"
          alt="Base image"
        />
        {/* Map the selected layers from ui context */}
        {Object.entries(layers).map(([pointId, image]) => (
          <Image
            loading="eager"
            className="absolute z-10 inset-0"
            alt={pointId}
            key={pointId}
            src={image}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        ))}
      </div>
    </div>
  )
}
