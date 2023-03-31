import Image from 'next/image'
import { FC, useState } from 'react'

import { DBMaterial } from '@/lib/models'

import { useUI } from '@/lib/hooks/useUI'

interface Props {
  material: DBMaterial
}

export const MaterialSelectorItem: FC<Props> = ({ material }) => {
  const { setLayerPoint, currentPointer, layers } = useUI()
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleClick = () => {
    setLayerPoint(material.layers)
  }

  // If current point layer is equal to the MaterialSelector then is selected
  const isSelected =
    layers[currentPointer.id] === material.layers[currentPointer.id]

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onFocus={() => setIsMouseOver(true)}
      onClick={handleClick}
      className="flex cursor-pointer hover:shadow-xl transition max-w-lg rounded-lg justify-between items-center gap-2 bg-white  p-1"
    >
      <p
        className={`text-primary font-semibold animate-fadeIn text-center transition break-words w-52 px-5 ${
          isSelected || isMouseOver ? '' : 'w-0 hidden'
        }`}
      >
        {material.name}
      </p>
      <div className="object-contain rounded-lg w-36 h-36 border-[1px] border-gray-200 overflow-hidden">
        <Image
          placeholder="blur"
          loading='lazy'
          blurDataURL='/images/placeholder.webp'
          width={144}
          height={144}
          src={material.materialPreview}
          alt={`${material.name} material`}
        />
      </div>
    </div>
  )
}
