import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useUI } from '@/hooks/useUI'
import { SideMenuItem } from './SideMenuItem'
import { useState } from 'react'
import { ChevronUp, ChevronDown } from './icons'
import { useFirestore } from '@/hooks/useFirestore'
import { DBMaterial } from '@/interfaces'

export const SideMenu = () => {
  const {
    toggleSideMenu,
    pointerMaterials = [],
    layers,
    setLayerPoint
  } = useUI()
  const [selectedItem, setSelectedItem] = useState('')

  const sideMenuRef = useOutsideClick(() => {
    toggleSideMenu()
  })

  return (
    <div
      ref={sideMenuRef}
      className="bg-primary animate-fadeIn z-[9999] px-24 fixed right-0 top-0 bottom-0 w-fit"
    >
      <div className="cursor-pointer text-white absolute top-24 left-1/2 -translate-y-1/2">
        <ChevronUp />
      </div>
      <ul className="list-none py-24 flex flex-col items-end gap-5">
        {pointerMaterials.map((material) => (
          <li className="flex justify-center" key={material.id}>
            <SideMenuItem
              onClick={() => setSelectedItem(material.id)}
              material={material}
              isSelected={selectedItem === material.id}
            />
          </li>
        ))}
      </ul>
      <div className="cursor-pointer text-white absolute left-1/2 bottom-24 -translate-y-1/2">
        <ChevronDown />
      </div>
    </div>
  )
}
