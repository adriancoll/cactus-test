import Image from 'next/image'
import { FC, useEffect } from 'react'

import { DBMaterial } from '@/interfaces'

import { useUI } from '@/hooks/useUI'

interface Props {
  material: DBMaterial
  onClick: () => void
}

export const MaterialSelectorItem: FC<Props> = ({ material, onClick }) => {
  const { setLayerPoint, currentPointer, layers } = useUI()

  const handleClick = () => {
    onClick()
    setLayerPoint(material.layers)
  }

  // If current point layer is equal to the MaterialSelector then is selected
  const isSelected =
    layers[currentPointer.id] === material.layers[currentPointer.id]

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer hover:shadow-xl transition max-w-lg rounded justify-between items-center gap-2 bg-white  p-1"
    >
      {isSelected && (
        <p className="text-primary animate-fadeIn text-center  break-words w-52 px-5">
          {material.name}
        </p>
      )}
      <div className="object-contain rounded overflow-hidden">
        <Image
          width={150}
          height={150}
          src={material.materialPreview}
          alt={`${material.name} material`}
        />
      </div>
    </div>
  )
}
