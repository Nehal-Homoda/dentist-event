import AppFooter from '@/components/layout/AppFooter'
import AppNavBar from '@/components/layout/AppNavBar'
import React from 'react'



type Props={
    children:React.ReactNode
}
export default function profilelayout({children}:Props) {
  return (
    <div>
        <AppNavBar isWithSponsors={true} colorInverted={true}></AppNavBar>
        {children}
        <AppFooter/>
    </div>
  )
}
