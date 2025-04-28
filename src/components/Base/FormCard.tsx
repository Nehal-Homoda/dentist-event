import React from "react";
import BaseBtn from "./BaseBtn";
import Link from "next/link";


type Props = {
    children: React.ReactNode;
    title: string;
    actionName: string;
    colNum: string;
    isBackBtn: boolean;
    
};

export default function ({ children, title, colNum, isBackBtn }: Props) {
    return (
        <div
            className={` ${colNum} bg-primary-light-800 px-5 py-7 rounded-2xl`}
        >
            {isBackBtn && (
                <Link  className="text-secondary-100 block mb-10 text-xl" href={"/"}>
                    <span className="mdi mdi-chevron-left text-xl "></span>
                    <span>Back </span>
                </Link>
            )}
            <h2 className="mb-5 text-primary text-2xl">{title}</h2>
            {children}
        </div>
    );
}
