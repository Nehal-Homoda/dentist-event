"use client";

import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import WhySubmitSection from "@/components/static/WhySubmitSection";
import { heros } from "@/core/AssetsManager";
import React, { useState } from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import SharedTextInput from "@/components/shared/SharedInput";
import BaseBtn from "@/components/Base/BaseBtn";
import SharedListBox from "@/components/shared/SharedListBox";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { getSettingService } from "@/services/appSharedServices";

export default function page() {
    const importantDates = [
        { date: "24/05/2025", title: "Abstract Submission Opens" },
        { date: "25/06/2025", title: "Submission Deadline" },
        {
            date: "30/06/2025",
            title: "Notification of Acceptance Consludes (Rolling)",
        },
        {
            date: "20/08/2025",
            title: "Deadline for accepted authors to register to confirm attendance",
        },
    ];

    const [abstractForm, setAbstractForm] = useState({
        name: "",
        title: "",
        email: "",
        maxAbstractTitle: "",
        minAbstractTitle: "",
    });

    const topicCategory = [
        "Cranio-Maxillofacial Trauma",
        "Orthognathic Surgey",
        "TMJ Disorders",
        "Craniofacial Anomalies & Cleft Lip and Palate",
        "Salivary Gland Disorders",
        "Dento-Alveolar Surgery",
        "Oral Cancer",
        "Sleep Disorders",
        "Oral & Cranio facial Implants",
        "Facial Aesthetics, Rhinoplasty & Occuloplasty",
        "Reconstructive surgery in oral & cranio facial surgery",
        "Cervicofacial pain",
        "AI,AR,VR in OMS",
        "Digitalization in OMS",
        "Controversial issues & evidence based debates in OMS",
    ];

    const [isOpen, setIsOpen] = useState(false);

    const takeInputValue = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        setAbstractForm((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));
    };

    const submitAbstractForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const abstractFormData = {
            ...abstractForm,
        };
        const abstractFormJson = JSON.stringify(abstractFormData);

        getSettingService().then((response) => {
            if (response.ok) {
                close();
            }
        });
    };

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const takeSelectedValue = () => {};

    return (
        <div>
            <SharedHeader pageName="Abstract" />
            <div className="container py-20">
                <div>
                    <div className="grid grid-cols-12  gap-4">
                        <div className="col-span-3">
                            <div
                                style={{
                                    backgroundImage: `url(${heros.abstract_img_1.src})`,
                                }}
                                className="rounded-lg bg-no-repeat bg-cover w-full h-full  "
                            ></div>
                        </div>
                        <div className="col-span-6">
                            <div
                                style={{
                                    backgroundImage: `url(${heros.abstract_img_3.src})`,
                                }}
                                className="px-3 w-full h-full flex flex-shrink-0 flex-grow-0 items-end justify-center lg:pb-6 pb-3 rounded-lg bg-no-repeat bg-cover "
                            >
                                {/* <div className="lg:block hidden bg-primary rounded-xl text-white lg:text-lg text-sm lg:px-7 px-4 lg:py-4 py-2">
                                    <span>Lorem Ipsum</span> <br />
                                    <span className="font-bold">
                                        Egyptian Association of Oral &
                                        Maxillofacial Surgery
                                    </span>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div
                                style={{
                                    backgroundImage: `url(${heros.abstract_img_2.src})`,
                                }}
                                className="w-full lg:aspect-[3/3.5] aspect-[3/4.5] bg-no-repeat bg-cover rounded-lg "
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="py-20">
                    <h2 className="text-center section-title">
                        Important Dates
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
                        {importantDates.map((item, index) => (
                            <div
                                onClick={open}
                                key={index}
                                className="cursor-pointer flex flex-col gap-4  items-center rounded-xl border border-primary bg-primary-light-800 px-5 py-10 "
                            >
                                <span className="text-primary font-bold">
                                    {item.date}
                                </span>
                                <span className="text-secondary-100 text-center">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <Dialog
                    open={isOpen}
                    as="div"
                    className="relative z-10 focus:outline-none "
                    onClose={close}
                >
                    <div
                        className="fixed inset-0 bg-black/30"
                        aria-hidden="true"
                    />
                    <div className="fixed inset-0  w-screen overflow-y-auto  ">
                        <div className="flex min-h-full items-center justify-center  p-4">
                            <DialogPanel
                                transition
                                className=" px-8 py-10 w-full max-w-md rounded-xl bg-primary-light-800 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                            >
                                <div className="abstractForm">
                                    <div className="mb-4 ">
                                        <SharedListBox
                                            items={topicCategory}
                                            handleChangeOption={(e) =>
                                                takeSelectedValue
                                            }
                                        />
                                    </div>
                                    <form onSubmit={submitAbstractForm}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <label htmlFor="name">
                                                    Name
                                                </label>
                                                <SharedTextInput
                                                    id="name"
                                                    name="name"
                                                    value={abstractForm.name}
                                                    sendInputValue={(e) =>
                                                        takeInputValue
                                                    }
                                                    placeholder=""
                                                />
                                            </div>

                                            <div className="col-span-1">
                                                <label htmlFor="title">
                                                    Title
                                                </label>
                                                <SharedTextInput
                                                    id="title"
                                                    name="title"
                                                    value={abstractForm.title}
                                                    sendInputValue={(e) =>
                                                        takeInputValue
                                                    }
                                                    placeholder=""
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <label htmlFor="email">
                                                    Email
                                                </label>
                                                <SharedTextInput
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={abstractForm.email}
                                                    sendInputValue={(e) =>
                                                        takeInputValue
                                                    }
                                                    placeholder=""
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <label htmlFor="abstract-title">
                                                    Abstract Title (70
                                                    characters maximum)
                                                </label>
                                                <textarea
                                                    className="outline-input"
                                                    id="abstract-title"
                                                    value={
                                                        abstractForm.minAbstractTitle
                                                    }
                                                    onChange={(e) =>
                                                        takeInputValue
                                                    }
                                                ></textarea>
                                            </div>

                                            <div className="col-span-2">
                                                <label htmlFor="max-abstract-title">
                                                    Abstract (3000 characters
                                                    maximum)
                                                </label>
                                                <textarea
                                                    rows={5}
                                                    className=" h-auto outline-input"
                                                    id="max-abstract-title"
                                                    value={
                                                        abstractForm.maxAbstractTitle
                                                    }
                                                    onChange={(e) =>
                                                        takeInputValue
                                                    }
                                                ></textarea>
                                            </div>

                                            <BaseBtn minWidth="w-44">
                                                <span>Submit</span>
                                            </BaseBtn>
                                        </div>
                                    </form>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>

                <WhySubmitSection></WhySubmitSection>
                <SharedCountDown />
                <StaticSponsorsAnimatedSection />
            </div>
        </div>
    );
}
