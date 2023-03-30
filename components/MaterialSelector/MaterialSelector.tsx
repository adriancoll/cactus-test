import { MaterialSelectorItem } from './MaterialSelectorItem'
import { ChevronUp, ChevronDown } from '../icons'
import { useMaterialSelector } from '@/hooks'

export const MaterialSelector = () => {
  const { onNextClick, onPrevClick, materialSelectorRef, pointerMaterials } =
    useMaterialSelector()

  return (
    <div
      ref={materialSelectorRef}
      className="bg-primary shadow-xl animate-fadeIn z-[9999] px-10 fixed right-0 top-0 bottom-0 w-fit min-w-[450px]"
    >
      <div
        onClick={onPrevClick}
        className="cursor-pointer flex items-center justify-center text-white absolute top-24 left-1/2 -translate-y-1/2"
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
        className="cursor-pointer flex items-center justify-center text-white absolute left-1/2 bottom-24 -translate-y-1/2"
      >
        <ChevronDown />
      </div>
    </div>
  )
}
