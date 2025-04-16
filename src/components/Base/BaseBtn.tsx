import React from "react";
type Props = {
    children: React.ReactNode;
    isWithArrow?:Boolean;
    minWidth?: string 
};
export default function BaseBtn({ children ,isWithArrow=true, minWidth = ''}: Props) {
    return (
            <button className={`flex-grow-0 flex-shrink-0 bg-gradient-to-r from-primary to-primary-light rounded-full text-background  font-semibold px-4 text-sm h-10 ${minWidth}`}>
                {children}
                {isWithArrow && (
                    <span className="ms-2 mdi mdi-arrow-right"></span>
                )}
            </button>
    );
}
