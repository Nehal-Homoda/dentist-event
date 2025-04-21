"use client";
import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { brand, icons } from "@/core/AssetsManager";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

interface FormDataInputErrors {
    username: string | null;
    password: string | null;
}
interface FormDataInputs {
    username: string;
    password: string;
}

export default function loginpage() {
    const [formData, setFormData] = useState<FormDataInputs>({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState<FormDataInputErrors>({
        username: null,
        password: null,
    });
    const formSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required().min(8),
    });

    const checkValidate = async (formData: any) => {
        await formSchema.validateAt("username", { username: "" });

        return;

        try {
            // Form Is Valid
            await formSchema.validate(formData, { abortEarly: false });

            formErrors.username = null;
            formErrors.password = null;
        } catch (err) {
            // Form Is Invalid
            if (err instanceof Yup.ValidationError) {
                const newErrors: Record<string, string> = {};

                err.inner.forEach((error) => {
                    if (error.path) {
                        newErrors[error.path] = error.message;
                    }
                });

                setFormErrors({
                    username: newErrors["username"]
                        ? newErrors["username"]
                        : null,
                    password: newErrors["password"]
                        ? newErrors["password"]
                        : null,
                });

                // do something with newErrors
            }
        }
    };

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };

        const formData = {
            username: target.username.value,
            password: target.password.value,
        };

        await checkValidate(formData);

        if (formErrors.password || formErrors.username) return;
        console.log("submitted");
    };

    const usernameChangeHandler = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setFormData((prev) => {
            const updated = {
                ...prev,
                username: value,
            };

            try {
                formSchema.validateAt("username", updated);
                setFormErrors((prev) => {
                    const updated = {
                        ...prev,
                        username: "",
                    };

                    return updated;
                });
            } catch (err) {
                console.log(err.path);
                console.log(err.message);
                setFormErrors((prev) => {
                    const updated = {
                        ...prev,
                    };
                    updated[err.path] = err.message;

                    return updated;
                });
            }

            return updated;
        });
    };

    return (
        <div>
            <SharedHeader pageName="Login" />
            <form onSubmit={submit}>
                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                        colNum="md:col-span-6 md:order-1 order-2"
                        title="Sign-In"
                        actionName="Sign In"
                    >
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="">
                                <input
                                    className="outline-input"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={usernameChangeHandler}
                                    placeholder="Enter your usename"
                                />
                                <span className="error text-error text-xs">
                                    {formErrors.username}
                                </span>
                            </div>
                            <div className="">
                                {/* <input
                                    className="outline-input"
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter your password"
                                /> */}
                                <span className="error text-error text-xs">
                                    {" "}
                                    {formErrors.password}{" "}
                                </span>
                            </div>
                        </div>
                        <div className="text-center mb-5">
                            <p className="text-primary mb-4">Or sign in with</p>
                            <div className="w-10 h-10 mx-auto mb-2">
                                <img
                                    className="w-full h-full object-contain"
                                    src={icons.google_icon.src}
                                    alt=""
                                />
                            </div>
                            <h2 className="text-primary ">
                                Don't have account ?
                            </h2>
                            <Link className="underline" href="">
                                Create your account
                            </Link>
                        </div>
                    </FormCard>
                    <div className="md:col-span-4 md:order-2 order-1 mx-auto my-auto ">
                        <div className="lg:w-72 lg:h-72 w-52 h-52">
                            <img
                                className="w-full h-full object-contain"
                                src={brand.logo_text.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </form>
            <SharedCountDown />
        </div>
    );
}
