"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros, icons } from "@/core/AssetsManager";
import { updateProfileService } from "@/services/authService";
import { setError, setUser } from "@/stores/auth/authSlice";
import { AppDispatch, RootState } from "@/stores/store";
import { errorHandler } from "@/utils/shared";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
    const user = useSelector((state: RootState) => state.counter.user);
    const [profileImg, setProfileImg] = useState("");
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const errorMsg = useSelector(
        (state: RootState) => state.counter.authErrorMsg
    );

    const handleChangeInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));
    };
    const handleChangeImg = () => { };
    // const user = useSelector((state: RootState) => state.counter.user);
    const [formData, setFormData] = useState({
        id: 1,
        fullName: "",
        jobTitle: "",
        facebookUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
    });
    useEffect(() => {
        if (user) {
            setFormData({
                id: user.id,
                fullName: user.fullName || "",
                jobTitle: user.jobTitle || "",
                facebookUrl: user.facebookUrl || "",
                instagramUrl: user.instagramUrl || "",
                linkedinUrl: user.linkedinUrl || "",
            });
        }
    }, [user]);

    const submit = (e: any) => {
        e.preventDefault();
        const x = {
            ...formData,
        };

        const updateFormObjJson = JSON.stringify(x);
        updateProfileService(updateFormObjJson).then((response) => {
            dispatch(setUser(response))
            router.push('/profile')
        }).catch((error) => {
            const errorMsg = errorHandler(error)
            dispatch(setError(errorMsg))
        })
    };

    return (
        <div>
            <SharedHeader pageName="" />

            <form onSubmit={submit}>
                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                        isBackBtn={true}
                        colNum="md:col-span-6 md:order-1 order-2 "
                        title="Edit Personal Iformation"
                        actionName=""
                    >
                        {errorMsg && <span className="text-red-800"> {errorMsg}</span>}
                        <SharedUploadPhoto
                            imageUploaded={user?.personalPhoto}
                            changeImageUploaded={handleChangeImg}
                        />
                        <p className="text-primary mt-2 mb-6">Profile Photo</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16   mt-10 ">
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    sendInputValue={(e) =>
                                        handleChangeInput(e, "fullName")
                                    }
                                />
                            </div>
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    name="jobTitle"
                                    id="jobTitle"
                                    placeholder="Enter your job title"
                                    value={formData.jobTitle}
                                    sendInputValue={(e) =>
                                        handleChangeInput(e, "jobTitle")
                                    }
                                />
                            </div>
                            <div className=" col-span-2 grid grid-cols-12 items-center">
                                <div className="col-span-1 w-5 h-5">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={icons.icon_facebook.src}
                                        alt=""
                                    />
                                </div>

                                <div className="col-span-11">
                                    <SharedTextInput
                                        name="facebookUrl"
                                        id="facebookUrl"

                                        placeholder="Enter your Facebook link"
                                        value={formData.facebookUrl}
                                        sendInputValue={(e) =>
                                            handleChangeInput(e, "facebookUrl")
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-12 items-center">
                                <div className="col-span-1 w-5 h-5">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={icons.icon_linkedin.src}
                                        alt=""
                                    />
                                </div>
                                <div className="col-span-11">
                                    <SharedTextInput
                                        name="linkedinUrl"
                                        id="linkedinUrl"
                                        placeholder="Enter your LinkedIn link"
                                        value={formData.linkedinUrl}
                                        sendInputValue={(e) =>
                                            handleChangeInput(e, "linkedinUrl")
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-12 items-center">
                                <div className="col-span-1 w-5 h-5">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={icons.icon_instgram.src}
                                        alt=""
                                    />
                                </div>
                                <div className="col-span-11">
                                    <SharedTextInput
                                        name="instgram"
                                        placeholder="Enter your Instagram link"
                                        id="title"
                                        value={formData.instagramUrl}
                                        sendInputValue={(e) =>
                                            handleChangeInput(e, "instagramUrl")
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <BaseBtn minWidth="w-40">
                            <span>Save update</span>
                        </BaseBtn>
                    </FormCard>
                    <div className="md:col-span-4 md:order-2 order-1 mx-auto my-auto ">
                        <div className="lg:w-72 lg:h-72 w-52 h-52">
                            <img
                                className="w-full h-full object-contain"
                                src={brand.logo_text.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </form>
            <SharedCountDown />
        </div>
    );
}
