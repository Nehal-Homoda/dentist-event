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

export default function page() {
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

    const handleMember = () => {
        setIsMember(!isMember);
    };

    const imageChanged = (file, image) => {
        console.log(file, image);
        setImageSentFromChild(image);
    };

    const takeSelectedOption = (e) => {};

    const handleRadioValue = (e) => {
        console.log(e.target);
        const radioInput = e.target;

        if (radioInput.value == "National ID") {
            setIsNumberInput(true);
            setIsFileInput(false);
        }
        if (radioInput.value == "passport") {
            setIsNumberInput(false);
            setIsFileInput(true);
        }
    };
    const handleCompleteForm = (e) => {
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
                    <BaseOutlineBtn onClick={handleMember}>
                        <span>is member</span>
                    </BaseOutlineBtn>
                    <div className="grid md:grid-cols-2 gap-4 mb-16   mt-10">
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

                        <SharedListBox
                            items={nationalityList}
                            itemTitle="name"
                            itemValue="id"
                            handleChangeOption={takeSelectedOption}
                        ></SharedListBox>

                        <SharedListBox
                            handleChangeOption={takeSelectedOption}
                            itemTitle="name"
                            itemValue="id"
                            items={academicDegreeList}
                        ></SharedListBox>

                        <input
                            type="text"
                            className="col-span-2 outline-input"
                            placeholder="Enter Your Address"
                        />
                        <div>
                            <input
                                onClick={handleRadioValue}
                                className=""
                                type="radio"
                                name="personId"
                                id="number"
                                value="National ID"
                            />
                            <label className="ms-3" htmlFor="number">
                                National ID
                            </label>
                        </div>
                        <div>
                            <input
                                onClick={handleRadioValue}
                                className="ml-5"
                                type="radio"
                                name="personId"
                                id="file"
                                value="passport"
                            />
                            <label className="ms-3" htmlFor="file">
                                Passport
                            </label>
                        </div>
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

                        <SharedUploadFile fileName="Upload Your Syndicate Card" />

                        {isMember && (
                            <div className="col-span-2">
                                <input
                                    onClick={handleCompleteForm}
                                    type="checkbox"
                                    id="complete"
                                    name="completeForm"
                                    value="complete"
                                />
                                <label
                                    className="text-primary"
                                    htmlFor="complete"
                                >
                                    Complete form to register in event
                                </label>
                            </div>
                        )}
                        {isJoinEvent && (
                            <>
                                <SharedListBox
                                    handleChangeOption={takeSelectedOption}
                                    itemTitle="name"
                                    itemValue="id"
                                    items={workSpecialty}
                                ></SharedListBox>
                                <SharedListBox
                                    handleChangeOption={takeSelectedOption}
                                    itemTitle="name"
                                    itemValue="id"
                                    items={participationType}
                                ></SharedListBox>
                                <input
                                    type="text"
                                    className="outline-input"
                                    placeholder="Enter title of lecture"
                                />
                                <input
                                    type="text"
                                    className="outline-input"
                                    placeholder="Medical specialty"
                                />
                                <SharedUploadFile fileName="Abstract of the paper" />
                                <SharedUploadFile fileName="Upload Your Passport" />

                                <SharedUploadFile fileName="Upload Your Cv" />
                                <SharedUploadFile fileName="Upload Your Work ID" />
                                <SharedUploadFile fileName="Request For Attendance Certifiacte" />
                            </>
                        )}
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
