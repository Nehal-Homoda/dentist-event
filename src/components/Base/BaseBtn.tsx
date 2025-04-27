import React from "react";
type Props = {
    children: React.ReactNode;
    isWithArrow?:Boolean;
    minWidth?: string;
    inverted?: boolean;
    handleBtnAction?: () => void;
};
export default function BaseBtn({ children ,isWithArrow=true, minWidth = '',inverted = false,handleBtnAction}: Props) {
    return (
            <button onClick={handleBtnAction} className={`group flex-grow-0 flex-shrink-0   rounded-full   font-semibold px-6 text-sm h-11 ${minWidth} ${inverted ? 'bg-white text-primary' : 'bg-gradient-to-r from-primary to-primary-light text-white'}`}>
                {children}
                {isWithArrow && (
                    <span className="group-hover:translate-x-1 inline-block transition duration-150 ms-2 mdi mdi-arrow-right"></span>
                )}
            </button>
    );
}
