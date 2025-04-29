import React, { useState } from "react";

type Props = {
    id?: string;
    name: string;
    placeholder?: string;
    type?: string;
    value: string;
    errorMessage?: string;
    sendInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SharedTextInput({
    id = "",
    name = "",
    placeholder = "",
    value,
    type = "",
    errorMessage,
    sendInputValue,
}: Props) {
    const [inputType, setInputType] = useState(type);

    const changeInputType = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <div>
            <div className="relative">
                <input
                    
                    className="outline-input"
                    onChange={sendInputValue}
                    type={inputType}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                />
                {type== "password" && (
                    <span
                        onClick={changeInputType}
                        className={`absolute top-2 right-5 cursor-pointer text-primary ${
                            inputType == "password"
                                ? "mdi mdi-eye-off-outline"
                                : "mdi mdi-eye-outline"
                        }`}
                    ></span>
                )}
            </div>
            <span className="text-error text-sm">{errorMessage}</span>
        </div>
    );
}
