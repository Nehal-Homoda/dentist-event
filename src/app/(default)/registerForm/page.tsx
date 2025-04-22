"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedComboBox from "@/components/shared/SharedComboBox";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedSelectInput from "@/components/shared/SharedSelectInput";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros, icons } from "@/core/AssetsManager";

import React, { useState } from "react";

export default function page() {
    const [imageSentFromChild, setImageSentFromChild] = useState(null);
    const nationalityList = [
        { id: "1", name: "Egyptain" },
        { id: "2", name: "Egyptain" },
    ];
    const academicDegreeList = [
        { id: "1", name: "Professor" },
        { id: "2", name: "Associate Professor" },
        { id: "3", name: "Resident Doctor" },
    ];
    const imageChanged = (file, image) => {
        console.log(file, image);
        setImageSentFromChild(image);
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

                        <SharedComboBox
                            btnName="Select Your Nationality"
                            listItem={nationalityList}
                        ></SharedComboBox>

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

                        <SharedComboBox
                            btnName="Select Your Academic Degree"
                            listItem={academicDegreeList}
                        ></SharedComboBox>

                        <input className="outline-input py-1" type="file" />
                    </div>
                </FormCard>
                <div className="md:col-span-4 md:order-2 order-1 mx-auto  ">
                    <div className="w-full h-full  ">
                        <img
                            className="w-full h-full object-contain rounded-r-2xl"
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
