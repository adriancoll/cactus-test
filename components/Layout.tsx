import { FC, PropsWithChildren } from 'react'
import { SideMenu } from '.'
import { useUI } from '@/hooks/useUI'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isSideMenuOpen } = useUI()

  return (
    <div className="w-full relative h-screen bg-primary">
      {isSideMenuOpen && <SideMenu />}
      {children}
    </div>
  )
}
