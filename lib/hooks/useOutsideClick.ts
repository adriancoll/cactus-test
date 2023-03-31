import { useEffect, useRef, MutableRefObject } from 'react'

type Callback = () => void

export const useOutsideClick = (callback: Callback): MutableRefObject<any> => {
  const ref = useRef<any>()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [callback, ref])

  return ref
}
