import React from "react";
import { heros } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";

export default function RegisterSectionWithVedio() {
    return (
        <>
            <div className="my-20 bg-gradient-to-br from-primary to-primary-light flex flex-col-reverse lg:flex-row  rounded-xl overflow-hidden">
                <div className="lg:w-[45%] h-full py-20 px-10 text-white">
                    <p className=" text-sm font-semibold">Watch Some Video</p>
                    <h2 className="section-title mt-5 mb-5">
                        What submit
                        <br />
                        Make?
                    </h2>

                    <p className="text-justify mb-10 lg:pe-10">
                        Cutting-Edge Training Courses: Delve into the recent
                        advances and breakthrough technologies shaping the
                        future of Oral & Maxillofacial Surgery. * Engaging
                        Lectures and Workshops: Learn from elite international
                        speakers and top level Egyptian experts, renowned for
                        their expertise and visionary insights. * A Premier
                        Commercial Exhibition: Explore a wide range of products
                        and innovations from leading companies in the industry.
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
