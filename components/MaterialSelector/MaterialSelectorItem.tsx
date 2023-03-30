import Image from 'next/image'
import { FC } from 'react'

import { DBMaterial } from '@/interfaces'

import { useUI } from '@/hooks/useUI'

interface Props {
  material: DBMaterial
}

export const MaterialSelectorItem: FC<Props> = ({ material }) => {
  const { setLayerPoint, currentPointer, layers } = useUI()

  const handleClick = () => {
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
        <p className="text-primary font-semibold animate-fadeIn text-center  break-words w-52 px-5">
          {material.name}
        </p>
      )}
      <div className="object-contain rounded w-32 h-32 border-[1px] border-gray-200 shadow overflow-hidden">
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
