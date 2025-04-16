import React from "react";
import BaseBtn from "../Base/BaseBtn";
import { elements, heros } from "@/core/AssetsManager";

export default function WhySubmitSection() {
    return (
        <>
            <div className="py-20 relative">
                <img
                    src={elements.logo_year.src}
                    alt=""
                    className="absolute -top-10 left-[50%] translate-x-[-50%]"
                />
                <div className="grid grid-cols-1 md:grid-cols-5 relative gap-16 md:gap-16 lg:gap-28 items-center">
                    <div className="md:col-span-2 pt-10 relative flex  md:justify-end">
                        <div className="hero-card w-full max-w-[300px] md:max-w-[400px] aspect-[3/3.25]  relative">
                            <img
                                src={elements.card_frame.src}
                                alt=""
                                className="w-full h-full object-contain absolute -right-[3rem] -top-[2rem]"
                            />
                            <img
                                src={heros.why_submit.src}
                                alt=""
                                className="w-full h-full object-cover rounded-2xl overflow-hidden relative"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <p className=" text-sm font-semibold">Why Submit ?</p>
                        <h3 className="text-3xl md:text-4xl mt-5 mb-5">
                            Lorem Ipsum is
                            <br />
                            simply dummy text of printing
                        </h3>

                        <p className="text-muted text-justify mb-10 lg:pe-20">
                            Lorem Ipsum  is simply dummy text of the printing
                            and typesetting industry . c Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scra
                        </p>

                        <BaseBtn minWidth="min-w-[175px]">Register now</BaseBtn>
                    </div>
                </div>
            </div>
        </>
    );
}
