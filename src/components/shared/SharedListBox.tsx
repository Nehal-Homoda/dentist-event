import { AcademicDegree } from "@/types/shared";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";

type Props = {
    items: Array<AcademicDegree>;
    itemTitle: keyof AcademicDegree | string;
    itemValue: keyof AcademicDegree | string;
    handleChangeOption: (selectedOption) => void;
};

export default function SharedListBox({
    items,
    itemTitle,
    itemValue,
    handleChangeOption,
}: Props) {
    const changeSelectedOption = (e) => {
        setSelected(e);
        console.log(e);
    };

    const [selected, setSelected] = useState<AcademicDegree| null>(null);

    useEffect(() => {
        if (!selected) {
            setSelected(items[0]);
        }
    });

    return (
        <div className="outline-input">
            <Listbox value={selected} onChange={changeSelectedOption}>
                <ListboxButton className="relative block w-full h-full rounded-lg  py-1.5 pr-8 pl-3 text-left text-sm/6 text-black focus:border-none focus:outline-none">
                    {selected ? selected[itemTitle] : selected}
                    <span className="mdi mdi-menu-down group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"></span>
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className="w-[var(--button-width)] mt-2 rounded-xl border p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none  ring-1 ring-primary"
                >
                    {items.map((item, index) => (
                        <ListboxOption
                            key={index}
                            value={item[itemValue] ? item[itemValue] : item}
                            className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 bg-white select-none "
                        >
                            <div className="text-sm/6 text-black">
                                {item[itemTitle] ? item[itemTitle] : item}
                            </div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    );
}
