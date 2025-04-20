import React from "react";
import BaseOutlineBtn from "../Base/BaseOutlineBtn";
import BaseRadioGroup from "../Base/BaseRadioGroup";

type Props = {
    image: string;
    userTypeTitle: string;
    price: string;
    programList: Array<string>;
};

export default function SharedRegisterCard({
    image,
    userTypeTitle,
    price,
    programList,
}: Props) {
    return (
        <div className="bg-background rounded-3xl px-8 py-7 shadow-[0_0_2rem_#00000020]  ">
            <div className="w-full aspect-[4/2.5]  rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="py-5">
                <h1 className=" font-bold text-lg mb-1">
                    {userTypeTitle}
                </h1>
                <p className="text-primary font-semibold text-3xl">{price}</p>
            </div>
            <div className="mb-5 ">
                {/* {programList.map((item, index) => (
                    // <ul
                    //     key={index}
                    //     className="text-secondary-500 flex "
                    // >
                    //     <span className="mdi mdi-checkbox-marked-outline text-xl me-3"></span>
                    //     <span className="">{item}</span>
                    // </ul>
                    <BaseRadioGroup key={index}></BaseRadioGroup>
                ))} */}
                <BaseRadioGroup></BaseRadioGroup>
            </div>
            <BaseOutlineBtn>
                <span>Get Now</span>
            </BaseOutlineBtn>
        </div>
    );
}
