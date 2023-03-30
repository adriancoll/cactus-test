import { useContext } from 'react'
import { UiContext } from '@/context'

export const useUI = () => useContext(UiContext)
