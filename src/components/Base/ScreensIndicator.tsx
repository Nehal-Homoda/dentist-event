import React from 'react'

export default function ScreensIndicator() {
  return (
    <div className='fixed left-0 top-[50%] z-50 ps-2 pe-3 bg-black text-white font-bold rounded-e-full uppercase'>
        <span className=" sm:hidden">xs</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}
