"use client";
import BaseBtn from "@/components/Base/BaseBtn";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedTextInput from "@/components/shared/SharedInput";
import { brand, icons } from "@/core/AssetsManager";
import { errorHandler, validateAllInputs, validateInput } from "@/utils/shared";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setUser, setError } from "@/stores/auth/authSlice";
import { AppDispatch, RootState } from "@/stores/store";
import { loginService } from "@/services/authService";

interface FormDataInputErrors {
    Email: string | null;
    Password: string | null;
}
interface FormDataInputs {
    Email: string;
    Password: string;
}

export default function LoginPage() {
    const [formData, setFormData] = useState<FormDataInputs>({
        Email: "",
        Password: "",
    });
    const [formErrors, setFormErrors] = useState<FormDataInputErrors>({
        Email: null,
        Password: null,
    });
    const formSchema = Yup.object().shape({
        Email: Yup.string().required().email(),
        Password: Yup.string().required().min(8),
    });

    const dispatch = useDispatch<AppDispatch>();
    const authErrorMsg = useSelector(
        (state: RootState) => state.counter.authErrorMsg
    );

    // const validateAllInputs = async () => {
    //     try {
    //         // Form Is Valid
    //         await formSchema.validate(formData, { abortEarly: false });

    //         formErrors.username = null;
    //         formErrors.password = null;
    //     } catch (err) {
    //         // Form Is Invalid
    //         if (err instanceof Yup.ValidationError == false) return;

    //         const newErrors: Record<string, string> = {};

    //         err.inner.forEach((error) => {
    //             if (error.path) {
    //                 newErrors[error.path] = error.message;
    //             }
    //         });

    //         setFormErrors({
    //             username: newErrors["username"] ? newErrors["username"] : null,
    //             password: newErrors["password"] ? newErrors["password"] : null,
    //         });
    //     }
    // };

    // const validateInput = async (
    //     inputName: keyof FormDataInputs,
    //     newValue: string
    // ) => {
    //     try {
    //         const newFormDataToCheck = { ...formData, [inputName]: newValue };

    //         await formSchema.validateAt(inputName, newFormDataToCheck);

    //         setFormErrors((prev) => ({
    //             ...prev,
    //             [inputName]: "",
    //         }));
    //     } catch (err) {
    //         if (err instanceof Yup.ValidationError == false) return;

    //         setFormErrors((prev) => ({
    //             ...prev,
    //             [inputName]: err.message,
    //         }));
    //     }
    // };
    const inputChangeHandler = async (
        e: React.ChangeEvent<HTMLInputElement>,
        inputName: keyof FormDataInputs
    ) => {
        const value = e.target.value;

        setFormData((prev) => ({
            ...prev,
            [inputName]: value,
        }));

        const message = await validateInput(formSchema, inputName, value);

        console.log("error message", message);

        setFormErrors((prev) => ({
            ...prev,
            [inputName]: message ? message : "",
        }));
    };
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const messages = await validateAllInputs<FormDataInputs>(
            formSchema,
            formData
        );

        if (messages) {
            setFormErrors({ ...messages });
        }

        if (formErrors.Password || formErrors.Email) return;
        if (!formData.Password || !formData.Email) return;

        const loginForm = {
            ...formData,
        };
        const loginFormConvertedJson = JSON.stringify(loginForm);

        loginService(loginFormConvertedJson)
            .then((response) => {
                dispatch(setUser(response));
                localStorage.setItem("user", JSON.stringify(response));
                setFormData({
                    Email: "",
                    Password: "",
                });
            })
            .catch((error) => {
                const errorMsg = errorHandler(error);
                dispatch(setError(errorMsg));
            });

        console.log("submitted");
        console.log("submitted", { ...formData });
    };

    useEffect(() => {
        console.log("formData updated:", formData);
    }, [formData]);

    return (
        <div>
            <SharedHeader pageName="Login" />
            <form onSubmit={submit}>
                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                        isBackBtn={false}
                        colNum="md:col-span-6 md:order-1 order-2"
                        title="Sign-In"
                        actionName="Sign In"
                    >
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="">
                                <SharedTextInput
                                    errorMessage={formErrors.Email || ""}
                                    name="Email"
                                    value={formData.Email}
                                    id="Email"
                                    placeholder="example@mail.com"
                                    sendInputValue={(e) =>
                                        inputChangeHandler(e, "Email")
                                    }
                                />
                            </div>
                            <div className="">
                                <SharedTextInput
                                    errorMessage={formErrors.Password || ""}
                                    id="password"
                                    name="password"
                                    value={formData.Password}
                                    type="password"
                                    placeholder="Enter your password"
                                    sendInputValue={(e) =>
                                        inputChangeHandler(e, "Password")
                                    }
                                />
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
                            <Link className="underline" href="/signup">
                                Create your account
                            </Link>
                        </div>

                        <BaseBtn minWidth="w-40">
                            <span>Sign In</span>
                        </BaseBtn>
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
