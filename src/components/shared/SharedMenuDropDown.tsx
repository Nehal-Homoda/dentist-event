import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type Props = {
    menuList: string[],
    btnName: string
}
export default function SharedMenuDropDown({ menuList, btnName }: Props) {
    return (
        <div>
            <Menu>
                <MenuButton className="inline-flex w-full justify-between items-center gap-2 rounded-md  py-1.5 text-sm/6  text-white border-none outline-none">
                    {btnName}
                    <span className="mdi mdi-chevron-down text-2xl"></span>
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom center"
                    className="w-52  rounded-xl border border-white/5 bg-white text-black p-1 text-sm/6  transition duration-100 ease-out  focus:outline-none "
                >

                    {menuList.map((item, index) => (
                        <MenuItem key={index}>
                            <button className= "hover:bg-primary-light-700  group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                {item}
                            </button>
                        </MenuItem>))}
                </MenuItems>
            </Menu>
        </div>
    )
}
