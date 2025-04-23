import { AcademicDegree } from "@/types/shared";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";

type Props = {
    items: any[];
    itemTitle?: string;
    itemValue?: string;
    handleChangeOption: (selectedOption:any) => void;
};

export default function SharedListBox({
    items,
    itemTitle,
    itemValue,
    handleChangeOption,
}: Props) {
    const changeSelectedOption = (e:any) => {
        setSelected(e);
        handleChangeOption(e)
       
    };

    const [selected, setSelected] = useState<any>(null);
    const [selectedObj,setSelectedObj]=useState(null);

  

    
    useEffect(() => {
      const result = items.find((item, index) => {
        if(!itemValue){
          return item==selected
        } 
        return item[itemValue] == selected;

      });

      if (!result) {
        setSelectedObj(items[0]);
        return
      }
      setSelectedObj(result)
      console.log(result);
    },[selected]);

    return (
        <div className="outline-input">
            <Listbox value={selected} onChange={changeSelectedOption}>
                <ListboxButton className="relative block w-full h-full rounded-lg  py-1.5 pr-8 pl-3 text-left text-sm/6 text-black focus:border-none focus:outline-none">
                    {selectedObj && itemTitle && selectedObj[itemTitle]  ? selectedObj[itemTitle] : selectedObj}
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
                            value={  itemValue && item[itemValue] ? item[itemValue] : item}
                            className="group flex cursor-pointer items-center gap-2 rounded-l
                            g py-1.5 px-3 bg-white select-none "
                        >
                            <div className="text-sm/6 text-black">
                                {itemTitle && item[itemTitle] ? item[itemTitle] : item }
                            </div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    );
}
