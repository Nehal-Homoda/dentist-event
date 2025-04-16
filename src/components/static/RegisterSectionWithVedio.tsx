import React from "react";
import { heros } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";

export default function RegisterSectionWithVedio() {
    return (
        <>
            <div className="my-20 bg-gradient-to-br from-primary to-primary-light flex flex-col-reverse lg:flex-row  rounded-xl overflow-hidden">
                <div className="lg:w-[45%] h-full py-20 px-10 text-white">
                    <p className=" text-sm font-semibold">Watch Some Video</p>
                    <h3 className="text-3xl lg:text-4xl mt-5 mb-5">
                        What is Lorem
                        <br />
                        Ipsum?
                    </h3>

                    <p className="text-justify mb-10 lg:pe-10">
                        Lorem Ipsum  is simply dummy text of the printing and
                        typesetting industry . c Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scra
                    </p>

                    <BaseBtn inverted>Register now</BaseBtn>
                </div>
                <div className="lg:w-[55%] aspect-[3/1.5] lg:aspect-[3/2] relative">
                    <img
                        src={heros.register_with_video_thumbnail.src}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <button className="play-btn w-16 h-16 text-4xl ps-2 text-primary bg-white rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <span className="mdi mdi-play-outline"></span>
                    </button>
                </div>
            </div>
        </>
    );
}
