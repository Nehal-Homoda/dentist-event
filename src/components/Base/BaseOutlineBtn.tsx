import React from "react";

type Props = {
    children: React.ReactNode;
};
export default function BaseOutlineBtn({ children }: Props) {
    return (
        <button className=" w-full border border-primary rounded-full  px-4 h-14 text-primary hover:bg-primary hover:text-background">
            {children}
            <span className="ms-2 font-bold mdi mdi-arrow-right "></span>
        </button>
    );
}
