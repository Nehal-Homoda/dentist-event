import React from "react";
import BaseOutlineBtn from "../Base/BaseOutlineBtn";

type Props = {
    image: string;
    userTypeTitle: string;
    price: string;
    programList: Array<string>;
};

export default function BaseRegisterCard({
    image,
    userTypeTitle,
    price,
    programList,
}: Props) {
    return (
        <div className="bg-background rounded-3xl px-8 py-7  ">
            <div className="w-full aspect-[4/2.5]  rounded-2xl bg-error">
                <img className="w-full h-full object-contain" src={image} alt="" />
            </div>
            <div className="py-5">
                <h1 className="text-black font-bold text-lg">
                    {userTypeTitle}
                </h1>
                <p className="text-primary font-bold text-3xl">{price}</p>
            </div>
            <div className="mb-5 min-h-[100px]">
                {programList.map((item, index) => (
                    <ul
                        key={index}
                        className="text-secondary-400 flex items-center "
                    >
                        <span className="mdi mdi-checkbox-marked-outline text-2xl me-3"></span>
                        <span className="">{item}</span>
                    </ul>
                ))}
            </div>
            <BaseOutlineBtn>
                <span>Get Now</span>
            </BaseOutlineBtn>
        </div>
    );
}
