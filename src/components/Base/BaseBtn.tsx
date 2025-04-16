import React from "react";
type Props = {
    children: React.ReactNode;
    isWithArrow?:Boolean;
    minWidth?: string;
    inverted?: boolean
};
export default function BaseBtn({ children ,isWithArrow=true, minWidth = '',inverted = false}: Props) {
    return (
            <button className={`flex-grow-0 flex-shrink-0  rounded-full   font-semibold px-4 text-sm h-10 ${minWidth} ${inverted ? 'bg-white text-primary' : 'bg-gradient-to-r from-primary to-primary-light text-white'}`}>
                {children}
                {isWithArrow && (
                    <span className="ms-2 mdi mdi-arrow-right"></span>
                )}
            </button>
    );
}
