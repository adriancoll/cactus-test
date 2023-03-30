import { useUI } from '@/hooks/useUI'
import Image from 'next/image'
import React from 'react'

const IMAGE_WIDTH = 1240
const IMAGE_HEIGHT = 873

export const LayersWrapper = () => {
  const { layers } = useUI()

  console.log({ test: Object.entries(layers) })

  return (
    <div className="rounded-lg relative ">
      <Image
        className="select-none object-contain pointer-events-none"
        priority
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        src="/images/base.jpeg"
        alt="Base image"
      />
      {Object.entries(layers).map(([pointId, image]) => (
        <Image
          className="absolute z-10 inset-0"
          alt={pointId}
          key={pointId}
          src={image}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      ))}
    </div>
  )
}
