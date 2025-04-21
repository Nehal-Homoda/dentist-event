"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros, icons } from "@/core/AssetsManager";

import React, { useState } from "react";

export default function page() {
    const [imageSentFromChild, setImageSentFromChild] = useState(null);
    const imageChanged = (e) => {
        const file = e;
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                setImageSentFromChild(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setImageSentFromChild(e);
    };
    return (
        <div>
            <SharedHeader pageName="Register" />
            <div className="grid md:grid-cols-10 container py-20 ">
                <FormCard
                    colNum="md:col-span-6 md:order-1 order-2"
                    title="Registration for EAOMS Members"
                    actionName="Send Now"
                >
                    <SharedUploadPhoto
                        imageUploaded={
                            imageSentFromChild
                                ? imageSentFromChild
                                : elements.sponsor2.src
                        }
                        changeImageUploaded={imageChanged}
                    ></SharedUploadPhoto>
                    <p className="text-primary mt-2 mb-6">Profile Photo</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-16">
                        <input
                            type="text"
                            className="outline-input col-span-2"
                            placeholder="Enter Your Name"
                        />
                        <input
                            className="outline-input"
                            type="number"
                            placeholder="Enter Your Phone"
                        />
                        <input
                            className="outline-input"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        <div className="outline-input">
                            <select
                                className="border-none outline-none w-full h-full"
                                name=""
                                id=""
                            >
                                <option value="" className="">
                                    select your nationality
                                </option>
                                <option value="">Egyptian</option>
                                <option value="">Not Egyptian</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            className="outline-input"
                            placeholder="Enter Your Address"
                        />
                        <input
                            className="outline-input"
                            type="number"
                            placeholder="Enter Your Nationality Id"
                        />
                        <input className="outline-input py-1" type="file" />

                        <div className="outline-input">
                            <select
                                className="border-none outline-none w-full h-full"
                                name=""
                                id=""
                            >
                                <option value="" className="">
                                    select your academic degree
                                </option>
                                <option value="">Professor</option>
                                <option value="">Associate Professor</option>
                                <option value="">Resident Doctor</option>
                            </select>
                        </div>
                        <input className="outline-input py-1" type="file" />
                    </div>
                </FormCard>
                <div className="md:col-span-4 md:order-2 order-1 mx-auto my-20">
                    <div className="w-[80%] ">
                        <img
                            className="w-full h-full object-contain"
                            src={heros.register_img.src}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <SharedCountDown />
        </div>
    );
}
