
'use client'

import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import SharedUploadPhoto from "@/components/shared/SharedUploadPhoto";
import { brand, elements, heros } from "@/core/AssetsManager";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {

    const [profileImg,setProfileImg]=useState('')

    const handleChangeInput=(e)=>{

    }
    const handleChangeImg=()=>{

    }
    return (
        <div>
            <SharedHeader pageName="" />

            <form>
                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                    isBackBtn={true}
                        colNum="md:col-span-6 md:order-1 order-2 "
                        title="Edit Personal Iformation"
                        actionName=""
                    >
                        
                        <SharedUploadPhoto imageUploaded={profileImg? profileImg : brand.logo.src}  changeImageUploaded={handleChangeImg}/>
                        <p className="text-primary mt-2 mb-6">Profile Photo</p>

                        <SharedTextInput name="userName" id="userName" value='nehal' sendInputValue={(e)=>handleChangeInput(e)}/>
                        <SharedTextInput name="title" id="title" value='Head of the Department of Oral and Dental Surgery' sendInputValue={(e)=>handleChangeInput(e)}/>


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
        </div>
    );
}
