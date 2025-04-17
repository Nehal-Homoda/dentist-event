import { elements } from "@/core/AssetsManager";
import React from "react";
type Props={
    image:string,
    title:string
}
export default function SharedCardWithShadow({image,title}:Props) {
    return (
        <div style={{backgroundImage:`url('${image}')`}} className=" flex items-end relative  rounded-2xl aspect-[3/4] bg-no-repeat bg-cover overflow-hidden ">
            <div className="flex pb-8 px-5 items-end w-full h-[50%] bg-gradient-to-b from-transparent  to-primary overflow-hidden">
                <h1 className="text-white font-bold text-lg ">
                    {title}
                </h1>
            </div>
        </div>
    );
}
