import { elements } from "@/core/AssetsManager";
import React from "react";

export default function SharedCardWithShadow() {
    return (
        <div className="relative  rounded-2xl bg-error aspect-[3/4] bg-[url('@/assets/images/heros/why-submit.png')] bg-no-repeat bg-cover overflow-hidden ">
            <div className="flex pb-4 items-end w-full h-full bg-gradient-to-b from-transparent  to-primary overflow-hidden">
                <h1 className="text-white font-bold text-lg ">
                    Lorem Ipsum is simply dummy text of the printing{" "}
                </h1>
            </div>
        </div>
    );
}
