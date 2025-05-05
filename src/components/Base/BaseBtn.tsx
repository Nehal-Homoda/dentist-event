import React from "react";
type Props = {
    children: React.ReactNode;
    isWithArrow?: Boolean;
    minWidth?: string;
    minHeight?: string;
    inverted?: boolean;
    handleBtnAction?: () => void;
    disabled?: boolean;
    loading?: boolean;
};
export default function BaseBtn({ children , minHeight = '', isWithArrow=true, minWidth = '',disabled = false, inverted = false,loading = false, handleBtnAction}: Props) {
    return (
            <button onClick={handleBtnAction} className={`group flex-grow-0 flex-shrink-0   rounded-full   font-semibold px-6 text-sm h-11 ${minWidth} ${minHeight} ${inverted ? 'bg-white text-primary' : 'bg-gradient-to-r from-primary to-primary-light text-white'}`}>
                {
                    loading ? 'Loading ...' : children
                }
                {isWithArrow && (
                    <span className="group-hover:translate-x-1 inline-block transition duration-150 ms-2 mdi mdi-arrow-right"></span>
                )}
            </button>
    );
}
