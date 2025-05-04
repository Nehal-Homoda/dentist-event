'use client'

import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { DatePicker } from "@heroui/date-picker";


type Props = {
    menuList: string[],
    btnName: string
    sendSelectedValue: (item) => void
    type: string | Date
}
export default function SharedMenuDropDown({ menuList, btnName, sendSelectedValue,type }: Props) {
    const [selectedItem, setSelectedItem] = useState(null)
    const handleSelectedItem = (item) => {
        console.log(item)
        setSelectedItem(item)
        sendSelectedValue(item)
    }
    return (
        <div>
            <Menu>
                <div className='relative'>
                    <MenuButton className="inline-flex w-full justify-between items-center gap-2 rounded-md  py-1.5 text-sm/6  text-white border-none outline-none">
                        {selectedItem ? selectedItem : btnName}
                        <span className="mdi mdi-chevron-down text-2xl"></span>
                    </MenuButton>

                    {type == 'string' && <MenuItems
                        transition
                        anchor="bottom center"
                        className="w-52  rounded-xl border border-white/5 bg-white text-black p-1 text-sm/6  transition duration-100 ease-out  focus:outline-none "
                    >

                        {menuList.map((item, index) => (
                            <MenuItem key={index}>
                                <button onClick={() => handleSelectedItem(item)} className="hover:bg-primary-light-700  group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                    {item}
                                </button>
                            </MenuItem>))}
                    </MenuItems>}


                    {type == 'date' && <MenuItems transition
                        anchor="bottom center"
                        className="w-52  aspect-[3/3.5]  rounded-xl border border-white/5 bg-white text-black p-1 text-sm/6  transition duration-100 ease-out  focus:outline-none ">
                        <DatePicker className='absolute z-50 ' />
                    </MenuItems>}
                </div>



            </Menu>
        </div>
    )
}
