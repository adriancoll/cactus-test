import { useOutsideClick } from './useOutsideClick'
import { useUI } from './useUI'

export const useMaterialSelector = () => {
  const {
    toggleSideMenu,
    pointerMaterials = [],
    layers,
    currentPointer,
    setLayerPoint
  } = useUI()

  const materialSelectorRef = useOutsideClick(() => {
    toggleSideMenu()
  })

  const onPrevClick = () => {
    const currentIndex = pointerMaterials.findIndex(
      (material) =>
        material.layers[currentPointer.id] === layers[currentPointer.id]
    )

    // If no one is selected take the last material
    if (currentIndex === -1) {
      return setLayerPoint(pointerMaterials[pointerMaterials.length - 1].layers)
    }

    // Otherwise take the prev one
    if (pointerMaterials[currentIndex - 1]) {
      return setLayerPoint(pointerMaterials[currentIndex - 1].layers)
    }

    // if it was the first select the last
    return setLayerPoint(pointerMaterials[pointerMaterials.length - 1].layers)
  }

  const onNextClick = () => {
    const currentIndex = pointerMaterials.findIndex(
      (material) =>
        material.layers[currentPointer.id] === layers[currentPointer.id]
    )

    // If no one is selected take the first material
    if (currentIndex === -1) return setLayerPoint(pointerMaterials[0].layers)

    // Otherwise take the next one
    if (pointerMaterials[currentIndex + 1]) {
      return setLayerPoint(pointerMaterials[currentIndex + 1].layers)
    }

    // if it was the last select the first
    return setLayerPoint(pointerMaterials[0].layers)
  }
  return { onNextClick, onPrevClick, materialSelectorRef, pointerMaterials }
}
