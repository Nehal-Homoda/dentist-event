import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";


type Props = {
    btnName: string;
    listItem: string[];
};
export default function SharedSelectInput({ btnName, listItem }: Props) {
  
    return (
        <div className="w-full h-full text-right outline-input">
            <Menu>
                <MenuButton className="w-full h-full  inline-flex items-center gap-2 rounded-md bg-white   text-xs text-secondary-400  outline-none border-none ">
                    {btnName}
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom"
                    className="w-64 mt-2 bg-white origin-top-right rounded-xl border border-primary  p-1 text-sm/6 text-black transition duration-100 ease-out  "
                >
                    {listItem.map((item, index) => (
                        <MenuItem key={index}>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                {item}
                            </button>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
         
        </div>
    );
}
