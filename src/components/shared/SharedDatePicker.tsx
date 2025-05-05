'use client'

import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { DateRange, DayPicker, DayPickerProps, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from 'date-fns';




type Props = {
    btnName: string
    sendSelectedValue: (item:Date|undefined) => void
}
export default function SharedMenuDropDown({ sendSelectedValue, btnName }: Props) {
    const [selectedItem, setSelectedItem] = useState(null)
    const [selected, setSelected] = useState<Date>(new Date('2025-10-1'));
    const formattedDate = format(selected, 'dd MMM yyyy');

    const modifiers: DayPickerProps["modifiers"] = {};
    if (selected) {
        modifiers.selected = selected;
    }


    const rangeMatcher: DateRange = {
        from: new Date(2025, 9, 4),
        to: new Date(2025, 9, 31)
    };

    const handleSelectedItem = (item) => {
        if(!item){
            return
        }
        const x = item.toString()
        console.log(item)
        setSelectedItem(x)
        sendSelectedValue(item)
    }

    return (
        <div>
            <Menu>
                <MenuButton className="inline-flex w-full justify-between items-center gap-2 rounded-md  py-1 text-sm/6  text-white border-none outline-none">
                    {formattedDate ? formattedDate : btnName}
                    <span className="mdi mdi-chevron-down text-2xl"></span>
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom center"
                    className="w-80 mt-3  rounded-xl border border-white/5 bg-white text-black p-1 text-sm/6  transition duration-100 ease-out  focus:outline-none "
                >
                    <DayPicker
                        modifiers={modifiers}
                        onDayClick={(day, modifiers) => {
                            if (modifiers.selected) {
                                setSelected(undefined);
                            } else {
                                setSelected(day);
                            }
                        }}
                        animate
                        disabled={rangeMatcher}
                        mode="single"
                        selected={selected}
                        onSelect={handleSelectedItem}
                        className='px-2 py-5 '
                        classNames={{ chevron: `hidden`, selected: `bg-primary rounded-full w-5 h-5`, }}
                        startMonth={new Date(2025, 9)}
                        endMonth={new Date(2025, 9)}
                        footer={
                            selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                        }
                    />

                </MenuItems>
            </Menu>
        </div>
    )
}
