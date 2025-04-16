import React from "react";
import { heros } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";

export default function InterduceSection() {
    return (
        <>
            <div className="my-20 grid grid-cols-1 lg:grid-cols-5 lg:gap-20 gap-10">
                <div className="lg:col-span-2 aspect-[3/1.5] lg:aspect-[3/2] relative rounded-xl overflow-hidden">
                    <img
                        src={heros.interduce_thumbnail.src}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <button className="play-btn w-16 h-16 text-4xl ps-2 text-primary bg-white rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <span className="mdi mdi-play-outline"></span>
                    </button>
                </div>
                <div className="lg:col-span-3">
                    <h3 className="text-3xl lg:text-4xl mb-5">
                        A Welcome Message from 
                        <br />
                        the <span className="text-primary">EAOMS</span> President
                    </h3>

                    <p className="text-justify text-muted mb-10 lg:pe-28 leading-7">
                        Lorem Ipsum  is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not onl five centuries , but also the leap into
                        electronic typesetting remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker
                    </p>
                </div>
            </div>
        </>
    );
}
