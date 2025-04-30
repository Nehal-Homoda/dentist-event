"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import SharedListBox from "@/components/shared/SharedListBox";
import SharedUploadFile from "@/components/shared/SharedUploadFile";
import { register, registerFiles } from "@/services/appSharedServices";

import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros, icons } from "@/core/AssetsManager";

import React, { FormEvent, useEffect, useState } from "react";

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

    const [isNumberInput, setIsNumberInput] = useState(true);
    const [isFileInput, setIsFileInput] = useState(false);
    const [isJoinEvent, setIsJoinEvent] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddressValue] = useState("");
    const [specialty, setSpecialtyValue] = useState("");
    const [password, setPasswordValue] = useState("");

    const [associatioFormData, setAssociatioFormData] = useState({
        // id:11,
        FullName: "",
        Password: "",
        AcademicDegree: 1,
        PhoneNumber: "",
        Email: "",
        Nationality: 1,
        NationalId: "",
        Address: "",
    });

    const [associationFiles, setAssociatioFiles] = useState({
        SyndicateCard: null,
        NationalIdPath: null,
        PersonalPhoto: null,
        CVPath: null,
        AbstractOfLecturePath: null,
        CertificatePath: null,
        AttendanceCertificatePath: null,
    });

    const [eventFormData, setEventFormData] = useState({
        packageId: "1",
        Workplace: 1,
        TitleOfLecture: "erwrewr",
        MedicalSpecialty: "",
        Country: "Egypt",
        TypeofParticipation: 1,
        AbstractOfLecture: "",
        // AbstractOfLecturePath: "",
        AttendanceDate: new Date(),
        AccommodationBooking: 1,
    });

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
        const isAssociation = Object.keys(associatioFormData).includes(name);
        if (isAssociation) {
            setAssociatioFormData((prev) => ({
                ...prev,
                [name]: e.target.value,
            }));
            return;
        }
        setEventFormData((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));

        // @ts-ignore
        console.log(associatioFormData[name]);
    };

    const fileInputChange = (file: any, image: any, inputName: string) => {
        console.log(file, image);
        setImageSentFromChild(image);
        setAssociatioFiles((prev) => ({
            ...prev,
            [inputName]: file,
        }));
    };

    const takeSelectedOption = (e: React.ChangeEvent<HTMLInputElement>) => {};

    const handleRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const handleCompleteForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsJoinEvent(true);
            return;
        }
        setIsJoinEvent(false);
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const x = {
            RegistrationData: {
                ...associatioFormData,
            },
            EventData: {
                ...eventFormData,
            },
        };

        const fd = new FormData();
        for (const objKey in associationFiles) {
            //@ts-ignore
            if (!associationFiles[objKey]) continue;
            //@ts-ignore
            fd.append(objKey, associationFiles[objKey]);
        }

        const convertDataToJson = JSON.stringify(x);
        console.log("submit", convertDataToJson);
        console.log("submitFile", fd);

        register(convertDataToJson)
            .then((response) => {
                if(response.code=403) return 
                setAssociatioFormData({
                    // id:11,
                    FullName: "",
                    Password: "",
                    AcademicDegree: 1,
                    PhoneNumber: "",
                    Email: "",
                    Nationality: 1,
                    NationalId: "",
                    Address: "",
                });
                setEventFormData({
                    packageId: "1",
                    Workplace: 1,
                    TitleOfLecture: "erwrewr",
                    MedicalSpecialty: "",
                    Country: "Egypt",
                    TypeofParticipation: 1,
                    AbstractOfLecture: "",
                    // AbstractOfLecturePath: "",
                    AttendanceDate: new Date(),
                    AccommodationBooking: 1,
                });
            })
            .catch((error) => {
                console.log(error.message);
            });
        registerFiles(fd)
            .then((response) => {})
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        console.log(associatioFormData);
    }, [associatioFormData]);

    return (
        <div>
            <SharedHeader pageName="Register" />
            <div className="grid md:grid-cols-10 container py-20 ">
                <FormCard
                isBackBtn={false}
                    colNum="md:col-span-6 md:order-1 order-2"
                    title="Registration for EAOMS Members"
                    actionName="s"
                >
                    <form onSubmit={submitForm}>
                        <SharedUploadPhoto
                            imageUploaded={
                                imageSentFromChild
                                    ? imageSentFromChild
                                    : elements.sponsor2.src
                            }
                            changeImageUploaded={(file, convertImg) =>
                                fileInputChange(
                                    file,
                                    convertImg,
                                    "PersonalPhoto"
                                )
                            }
                        ></SharedUploadPhoto>
                        <p className="text-primary mt-2 mb-6">Profile Photo</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-16   mt-10">
                            <>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedTextInput
                                        name="userName"
                                        id="userName"
                                        placeholder="Enter Your Name"
                                        value={associatioFormData.FullName}
                                        sendInputValue={(e) =>
                                            handleChangeValue(e, "FullName")
                                        }
                                    />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedTextInput
                                        name="password"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        type="password"
                                        value={associatioFormData.Password}
                                        sendInputValue={(e) =>
                                            handleChangeValue(e, "Password")
                                        }
                                    />
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <SharedTextInput
                                        name="phone"
                                        id="phone"
                                        value={associatioFormData.PhoneNumber}
                                        placeholder="Enter Your Phone"
                                        sendInputValue={(e) =>
                                            handleChangeValue(e, "PhoneNumber")
                                        }
                                    />
                                </div>

                                <div className="md:col-span-1 col-span-2">
                                    <SharedTextInput
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={associatioFormData.Email}
                                        placeholder="Enter Your Email"
                                        sendInputValue={(e) =>
                                            handleChangeValue(e, "Email")
                                        }
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
                                    <SharedTextInput
                                        name="address"
                                        id="address"
                                        placeholder="Enter Your Address"
                                        value={associatioFormData.Address}
                                        sendInputValue={(e) =>
                                            handleChangeValue(e, "Address")
                                        }
                                    />
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <SharedUploadFile
                                        changeFile={(file) =>
                                            fileInputChange(
                                                file,
                                                undefined,
                                                "SyndicateCard"
                                            )
                                        }
                                        fileName="Upload Your Syndicate Card"
                                    />
                                </div>
                                <div className="md:col-span-2 col-span-2 flex gap-10 items-center">
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
                                        <label
                                            className=" mb-1"
                                            htmlFor="number"
                                        >
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
                                        <SharedTextInput
                                            sendInputValue={(e) =>
                                                handleChangeValue(
                                                    e,
                                                    "NationalId"
                                                )
                                            }
                                            type="number"
                                            name="NationalId"
                                            placeholder="Enter Your NationalID"
                                            value={
                                                associatioFormData.NationalId
                                            }
                                        ></SharedTextInput>
                                    )}

                                    {isFileInput && (
                                        <SharedUploadFile
                                            changeFile={(file) =>
                                                fileInputChange(
                                                    file,
                                                    undefined,
                                                    "NationalIdPath"
                                                )
                                            }
                                            fileName="Upload Your Passport"
                                        />
                                    )}
                                </div>

                                <div className="col-span-2 mt-8">
                                    <input
                                        onClick={(e)=>handleCompleteForm}
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
                            </>
                            <>
                                {isJoinEvent && (
                                    <>
                                        <div className="md:col-span-1 col-span-2">
                                            {/* <SharedTextInput
                                                type="number"
                                                name="id"
                                                sendInputValue={(e)=>handleChangeValue(e,'')}
                                                value={eventFormData.packageId}
                                                placeholder="Enter Yor Package Id"
                                            /> */}
                                            <SharedListBox
                                                handleChangeOption={
                                                    takeSelectedOption
                                                }
                                                itemTitle="name"
                                                itemValue="id"
                                                items={workSpecialty}
                                            ></SharedListBox>
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedListBox
                                                handleChangeOption={
                                                    takeSelectedOption
                                                }
                                                itemTitle="name"
                                                itemValue="id"
                                                items={participationType}
                                            ></SharedListBox>
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedTextInput
                                                name="lectureTitle"
                                                id="title"
                                                placeholder="Enter title of lecture"
                                                value={
                                                    eventFormData.TitleOfLecture
                                                }
                                                sendInputValue={(e) =>
                                                    handleChangeValue(
                                                        e,
                                                        "TitleOfLecture"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedTextInput
                                                name="specialty"
                                                id="specialty"
                                                placeholder="Medical specialty"
                                                value={
                                                    eventFormData.MedicalSpecialty
                                                }
                                                sendInputValue={(e) =>
                                                    handleChangeValue(
                                                        e,
                                                        "MedicalSpecialty"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedUploadFile
                                                changeFile={(file) =>
                                                    fileInputChange(
                                                        file,
                                                        undefined,
                                                        "SyndicateCard"
                                                    )
                                                }
                                                fileName="Abstract of the paper"
                                            />
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedUploadFile
                                                changeFile={(file) =>
                                                    fileInputChange(
                                                        file,
                                                        undefined,
                                                        "SyndicateCard"
                                                    )
                                                }
                                                fileName="Upload Your Passport"
                                            />
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedUploadFile
                                                changeFile={(file) =>
                                                    fileInputChange(
                                                        file,
                                                        undefined,
                                                        "CVPath"
                                                    )
                                                }
                                                fileName="Upload Your Cv"
                                            />
                                        </div>
                                        <div className="md:col-span-1 col-span-2">
                                            <SharedUploadFile
                                                changeFile={(file) =>
                                                    fileInputChange(
                                                        file,
                                                        undefined,
                                                        "SyndicateCard"
                                                    )
                                                }
                                                fileName="Upload Your Work ID"
                                            />
                                        </div>
                                        <div className="md:col-span-2 col-span-2">
                                            <SharedUploadFile
                                                changeFile={(file) =>
                                                    fileInputChange(
                                                        file,
                                                        undefined,
                                                        "AttendanceCertificatePath"
                                                    )
                                                }
                                                fileName="Request For Attendance Certifiacte"
                                            />
                                        </div>
                                    </>
                                )}
                            </>
                        </div>

                        <BaseBtn minWidth="w-40">
                            <span>Send Now</span>
                        </BaseBtn>
                    </form>
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
