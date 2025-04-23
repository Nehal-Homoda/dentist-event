"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import BaseOutlineBtn from "@/components/Base/BaseOutlineBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedListBox from "@/components/shared/SharedListBox";
import SharedUploadFile from "@/components/shared/SharedUploadFile";

import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros, icons } from "@/core/AssetsManager";

import React, { useEffect, useState } from "react";

export default function SignupPage() {
    const [imageSentFromChild, setImageSentFromChild] = useState(null);

    const nationalityList = [
        { id: "1", name: "Egyptain" },
        { id: "2", name: "Not Egyptain" },
    ];
    const academicDegreeList = [
        { id: "1", name: "Professor" },
        { id: "2", name: "Associate Professor" },
        { id: "3", name: "Resident Doctor" },
    ];

    const workSpecialty = [
        { id: "1", name: "Hosiptal" },
        { id: "2", name: "University" },
    ];
    const participationType = [
        { id: "1", name: "Full Registeration" },
        { id: "2", name: "Attendance Only" },
        { id: "3", name: "Paper Submission" },
        { id: "4", name: "Lecture" },
        { id: "5", name: "Workshop" },
    ];
    const DegreeList = ["Professor", "Associate Professor", "Resident Doctor"];

    const [isNumberInput, setIsNumberInput] = useState(false);
    const [isFileInput, setIsFileInput] = useState(false);
    const [isJoinEvent, setIsJoinEvent] = useState(false);
    const [isMember, setIsMember] = useState(false);

  

    const imageChanged = (file:any, image:any) => {
        console.log(file, image);
        setImageSentFromChild(image);
    };

    const takeSelectedOption = (e:any) => {};

    const handleRadioValue = (e:any) => {
        console.log(e.target);
        const radioInput = e.target;

        if (radioInput.value == "nationalId") {
            setIsNumberInput(true);
            setIsFileInput(false);
        }
        if (radioInput.value == "passport") {
            setIsNumberInput(false);
            setIsFileInput(true);
        }
    };
    const handleCompleteForm = (e:any) => {
        if (e.target.checked) {
            setIsJoinEvent(true);
            return;
        }
        setIsJoinEvent(false);
    };

    useEffect(() => {}, []);

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-16   mt-10">
                        <div className="md:col-span-1 col-span-2">
                            <input
                                type="text"
                                className="outline-input"
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="md:col-span-1 col-span-2">
                            <input
                                className="outline-input"
                                type="number"
                                placeholder="Enter Your Phone"
                            />
                        </div>

                        <div className="md:col-span-1 col-span-2">
                            <input
                                className="outline-input"
                                type="email"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div className="md:col-span-1 col-span-2">
                            <SharedListBox
                                items={nationalityList}
                                itemTitle="name"
                                itemValue="id"
                                handleChangeOption={takeSelectedOption}
                            ></SharedListBox>
                        </div>
                        <div className="md:col-span-1 col-span-2">
                            <SharedListBox
                                handleChangeOption={takeSelectedOption}
                                itemTitle="name"
                                itemValue="id"
                                items={academicDegreeList}
                            ></SharedListBox>
                        </div>
                        <div className="md:col-span-1 col-span-2">
                            <input
                                type="text"
                                className="col-span-2 outline-input"
                                placeholder="Enter Your Address"
                            />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex gap-10 items-center">
                            <div className="flex items-center gap-2">
                                <input
                                    onClick={handleRadioValue}
                                    className=""
                                    type="radio"
                                    name="personId"
                                    id="number"
                                    value="nationalId"
                                    defaultChecked
                                />
                                <label className=" mb-1" htmlFor="number">
                                    National ID
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    onClick={handleRadioValue}
                                    className=""
                                    type="radio"
                                    name="personId"
                                    id="file"
                                    value="passport"
                                />
                                <label className=" mb-1" htmlFor="file">
                                    Passport
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-1 col-span-2 lg:col-span-1">
                            {isNumberInput && (
                                <input
                                    className="outline-input"
                                    type="number"
                                    placeholder="Enter Your NationalID"
                                />
                            )}

                            {isFileInput && (
                                <SharedUploadFile fileName="Upload Your Passport" />
                            )}
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <SharedUploadFile fileName="Upload Your Syndicate Card" />
                        </div>

                        <div className="col-span-2">
                            <input
                                onClick={handleCompleteForm}
                                type="checkbox"
                                id="complete"
                                name="completeForm"
                                value="complete"
                            />
                            <label
                                className="ms-3 text-primary"
                                htmlFor="complete"
                            >
                                Complete form to register in event
                            </label>
                        </div>
                        {isJoinEvent && (
                            <>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedListBox
                                        handleChangeOption={takeSelectedOption}
                                        itemTitle="name"
                                        itemValue="id"
                                        items={workSpecialty}
                                    ></SharedListBox>
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedListBox
                                        handleChangeOption={takeSelectedOption}
                                        itemTitle="name"
                                        itemValue="id"
                                        items={participationType}
                                    ></SharedListBox>
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <input
                                        type="text"
                                        className="outline-input"
                                        placeholder="Enter title of lecture"
                                    />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <input
                                        type="text"
                                        className="outline-input"
                                        placeholder="Medical specialty"
                                    />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedUploadFile fileName="Abstract of the paper" />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedUploadFile fileName="Upload Your Passport" />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedUploadFile fileName="Upload Your Cv" />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedUploadFile fileName="Upload Your Work ID" />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedUploadFile fileName="Request For Attendance Certifiacte" />
                                </div>
                            </>
                        )}
                    </div>
                </FormCard>
                <div className=" hidden md:block md:col-span-4  md:order-2 order-1 mx-auto mt-24  ">
                    <div className="w-full aspect-[3/3.5] ">
                        <img
                            className="w-full h-full object-cover rounded-r-2xl"
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
