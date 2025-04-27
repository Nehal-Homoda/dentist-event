import React from "react";
import BaseBtn from "./BaseBtn";

type Props = {
    children: React.ReactNode;
    title: string;
    actionName: string;
    colNum: string;
};

export default function ({
    children,
    title,
    colNum,
}: Props) {
    return (
        <div
            className={` ${colNum} bg-primary-light-800 px-5 py-7 rounded-2xl`}
        >
            <h2 className="mb-5 text-primary text-2xl">{title}</h2>
            {children}
          
        </div>
    );
}
