import React, { useState } from "react";

import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { AcademicDegree } from "@/types/shared";

type Props = {
    btnName: string;
    listItem: AcademicDegree[];
};

export default function SharedComboBox({ listItem }: Props) {
    const [selected, setSelected] = useState(listItem[0]);
    const [query, setQuery] = useState("");

    const filteredList =
        query === ""
            ? listItem
            : listItem.filter((item) => {
                  return item.name.toLowerCase().includes(query.toLowerCase());
              });
    return (
        <div className="w-full h-full text-right outline-input">
            <Combobox
                value={selected}
                onChange={(value) => setSelected(value)}
                onClose={() => setQuery("")}
            >
                <div className="relative">
                    <ComboboxInput
                        className="w-full rounded-lg border-none  py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none "
                        displayValue={(person) => person.name ?? " "}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <span className="mdi mdi-menu-down text-xl text-primary"></span>
                    </ComboboxButton>
                </div>

                <ComboboxOptions
                    anchor="bottom"
                    transition
                    className="ring-1 ring-primary  w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1  transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                >
                    {filteredList.map((person, index) => (
                        <ComboboxOption
                            key={index}
                            value={person}
                            className="group flex bg-white w-full cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none "
                        >
                            <div className="text-sm/6 text-black">
                                {person.name}
                            </div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
}
