import { useUI } from '@/hooks/useUI'
import { DBMaterial } from '@/interfaces'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  material: DBMaterial
  isSelected: boolean
  onClick: () => void
}

export const SideMenuItem: FC<Props> = ({
  material,
  isSelected = false,
  onClick
}) => {
  const { setLayerPoint } = useUI()

  const handleClick = () => {
    onClick()
    setLayerPoint(material.layers)
  }

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
