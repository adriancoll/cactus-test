import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useUI } from '@/hooks/useUI'
import { SideMenuItem } from './SideMenuItem'
import { useState } from 'react'
import { ChevronUp, ChevronDown } from './icons'

export const SideMenu = () => {
  const { toggleSideMenu, pointerMaterials = [], currentPointer } = useUI()
  const [selectedItem, setSelectedItem] = useState('')

  const sideMenuRef = useOutsideClick(() => {
    toggleSideMenu()
  })

  return (
    <div
      ref={sideMenuRef}
      className="bg-primary animate-fadeIn z-[9999] py-10 overflow-y-auto  h-full fixed right-0 bottom-0 top-0 lg:w-[400px] md:w-full flex flex-col  md:flex-row md:h-fit gap-4 items-center p-2 md:fixed md:-bottom-12 md:left-10 md:right-10"
    >
      <ChevronUp />
      <pre>{JSON.stringify(currentPointer.name, null, 2)}</pre>
      {pointerMaterials.map((material) => (
        <SideMenuItem key={material.id} material={material} isSelected={true} />
      ))}
      <ChevronDown />
    </div>
  )
}
