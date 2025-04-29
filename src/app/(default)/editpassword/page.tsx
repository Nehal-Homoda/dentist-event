"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros } from "@/core/AssetsManager";
import { changePassword } from "@/services/authService";
import React, { useState } from "react";

export default function page() {
    const [profileImg, setProfileImg] = useState("");

    const handleChangeImg = () => {};

    const inputChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));
    };

    const [formData, setFormData] = useState({
        UserID: "1",
        oldPassword: "",
        NewPassword: "",
        NewPasswordConfirm: "",
    });

    const submitUpdatePasswordForm = (e: any) => {
        e.preventDefault();
        const changePasswordForm = {
            ...formData
        };
        const changePasswordFormJson = JSON.stringify(changePasswordForm);
        changePassword(changePasswordFormJson);
    };
    return (
        <div>
            <SharedHeader pageName="" />

            <form onSubmit={submitUpdatePasswordForm}>
                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                        isBackBtn={true}
                        colNum="md:col-span-6 md:order-1 order-2 "
                        title="Edit Personal Iformation"
                        actionName=""
                    >
                        <SharedUploadPhoto
                            imageUploaded={
                                profileImg ? profileImg : brand.logo.src
                            }
                            changeImageUploaded={handleChangeImg}
                        />
                        <p className="text-primary mt-2 mb-6">Profile Photo</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16   mt-10 ">
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    id="password"
                                    name="password"
                                    value={formData.oldPassword}
                                    type="password"
                                    placeholder="Enter Old Password"
                                    sendInputValue={(e) =>
                                        inputChangeHandler(e, "oldPassword")
                                    }
                                />
                            </div>
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    id="password"
                                    name="password"
                                    value={formData.NewPassword}
                                    type="password"
                                    placeholder=" Enter New Password"
                                    sendInputValue={(e) =>
                                        inputChangeHandler(e, "NewPassword")
                                    }
                                />
                            </div>
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    id="password"
                                    name="password"
                                    value={formData.NewPasswordConfirm}
                                    type="password"
                                    placeholder="Confirmation"
                                    sendInputValue={(e) =>
                                        inputChangeHandler(
                                            e,
                                            "NewPasswordConfirm"
                                        )
                                    }
                                />
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
