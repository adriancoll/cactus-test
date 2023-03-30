import { MaterialSelectorItem } from './MaterialSelectorItem'
import { ChevronUp, ChevronDown } from '../icons'
import { useMaterialSelector } from '@/hooks'
import { CloseIcon } from '../icons/Chevrons'

export const MaterialSelector = () => {
  const {
    onNextClick,
    onPrevClick,
    materialSelectorRef,
    pointerMaterials,
    toggleSideMenu
  } = useMaterialSelector()

  return (
    <div
      ref={materialSelectorRef}
      className="bg-primary/30 backdrop-blur-lg shadow-xl animate-fadeIn z-[9999] md:px-10 px-2 fixed right-0 top-0 bottom-0 w-fit lg:min-w-[450px]"
    >
      <div title='Close material selector' className='hover:rotate-3 transition hover:bg-white/10 rounded-full hover:shadow-lg p-2 text-white cursor-pointer absolute top-2 right-2' onClick={toggleSideMenu}>
        <CloseIcon />
      </div>
      <div
        onClick={onPrevClick}
        className="cursor-pointer rounded-full p-2 bg-white/10 transition hover:bg-white/20 hover:shadow-lg text-center flex items-center justify-center text-white absolute top-16 lg:top-24 left-1/2 -translate-x-1/2"
      >
        <ChevronUp />
      </div>
      <ul className="list-none pt-52 flex flex-col items-end gap-5">
        {pointerMaterials.map((material) => (
          <li
            title={`Use ${material.name} material`}
            className="flex justify-center"
            key={material.id}
          >
            <MaterialSelectorItem material={material} />
          </li>
        ))}
      </ul>
      <div
        onClick={onNextClick}
        className="cursor-pointer rounded-full p-2 bg-white/10 transition hover:bg-white/20 hover:shadow-lg text-center flex items-center justify-center text-white absolute left-1/2 lg:bottom-24 bottom-16 -translate-x-1/2"
      >
        <ChevronDown />
      </div>
    </div>
  )
}
