import { useContext } from 'react'
import { UiContext } from '@/lib/context'

export const useUI = () => useContext(UiContext)
