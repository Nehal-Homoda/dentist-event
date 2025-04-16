import { bg, elements } from "@/core/AssetsManager";
import React from "react";

type Props = {
    pageName: string;
};
export default function SharedHeader({ pageName }: Props) {
    return (
        <div className="relative w-full lg:h-[425px] h-[350px] bg-[url('@/assets/images/bg/header-img.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center lg:pb-16 pb-14">
                <img
                    className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-[70%] max-w-[300px]     object-contain"
                    src={elements.logo_year_clear.src}
                    alt=""
                />
            <h1 className="lg:text-3xl text-2xl text-white font-bold  text-center">
                {pageName}
            </h1>
        </div>
    );
}
