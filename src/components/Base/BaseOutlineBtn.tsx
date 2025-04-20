import React from "react";

type Props = {
    children: React.ReactNode;
    onClick?: () => void
};
export default function BaseOutlineBtn({ children, onClick }: Props) {
    return (
        <button onClick={onClick} className="group relative w-full ring-1 ring-primary rounded-full gap-3 h-12 text-primary hover:text-white overflow-hidden">
            <div className="group-hover:-translate-x-0  -translate-x-full absolute transition-all duration-150 ease-in-out left-0 top-0 w-full h-full rounded-full bg-gradient-to-br from-primary to-primary-light"></div>

            <span className="relative z-10">
                {children}
                <span className="ms-2 font-bold mdi mdi-arrow-right "></span>
            </span>
        </button>
    );
}
