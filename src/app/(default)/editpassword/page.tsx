"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros } from "@/core/AssetsManager";
import { changePasswordService } from "@/services/authService";
import { setError, setUser } from "@/stores/auth/authSlice";
import { errorHandler } from "@/utils/shared";
import { RootState } from "@/stores/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
    const [errorMsg,setErrorMsg]=useState('')
    const user = useSelector((state: RootState) => state.counter.user);
    const [profileImg, setProfileImg] = useState("");
    const dispatch = useDispatch()
    const router = useRouter()

    const handleChangeImg = () => { };

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
        UserID: user?.id,
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
        changePasswordService(changePasswordFormJson).then((response) => {
            dispatch(setUser(response))
            router.push('/profile')
        }).catch((error) => {
            setErrorMsg(error?.message)
            // const errorMsg = errorHandler(error)
            // dispatch(setError(errorMsg))
        })
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
                        {errorMsg && <span className="text-red-800"> {errorMsg}</span>}
                        

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16   mt-10 ">
                            <div className="md:col-span-1 col-span-2">
                                <SharedTextInput
                                    id="oldpassword"
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
                                    id="newpassword"
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
                                    id="confirmpassword"
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
