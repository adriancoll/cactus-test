import { FC, PropsWithChildren } from 'react'
import { MaterialSelector } from '@/components/MaterialSelector'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full relative h-screen bg-primary">
      <MaterialSelector />
      {children}
    </div>
  )
}
