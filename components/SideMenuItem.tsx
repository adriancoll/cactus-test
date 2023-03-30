import { DBMaterial } from '@/interfaces'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  material: DBMaterial
  isSelected: boolean
}

export const SideMenuItem: FC<Props> = ({ material, isSelected = false }) => {
  return (
    <div className="flex cursor-pointer hover:shadow-xl transition w-fit rounded justify-around items-center gap-2 bg-white p-1">
      {isSelected && (
        <p className="text-primary animate-fadeIn text-center  break-words w-24">
          {material.name} {isSelected ? 'select' : 'no select'}
        </p>
      )}
      <div className="object-contain rounded overflow-hidden">
        <Image
          width={100}
          height={100}
          src={material.materialPreview}
          alt={`${material.name} material`}
        />
      </div>
    </div>
  )
}
