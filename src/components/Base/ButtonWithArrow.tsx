import React from "react";

export default function buttonWithArrow({ btnName, withArrow }) {
    return (
        <div className="">
            <button className="bg-gradient-to-r from-primary-100 to-primary-light-100 rounded-md text-background  font-bold px-4 h-10">
                {btnName}
                <span className="ms-2 font-bold mdi mdi-arrow-right"></span>
            </button>
        </div>
    );
}
