// "use client";
import FormCard from "@/components/Base/FormCard";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { heros } from "@/core/AssetsManager";
import React from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import { getScheduleById } from "@/services/appSharedServices";
// import { useRouter } from "next/navigation";

export function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function page({ params }: { params: { id: string } }) {
    const { id } = params;

    const item = getScheduleById(id);
    // const router = useRouter();
    const backHandler = () => {
        // router.back();
    };
    return (
        <div>
            <SharedHeader pageName="Schedule" />

            <div className="container py-20">
                <div className="grid md:grid-cols-10 container py-20 ">
                    {/* <FormCard
                        isBackBtn={true}
                        colNum="md:col-span-6 md:order-1 order-2"
                        title="The Well-RoundedSurgeon Leader"
                        actionName=""
                    > */}

                    <div className="md:col-span-6 md:order-1 order-2  bg-primary-light-800 px-5 py-7 rounded-2xl">
                        <div className="">
                            <span className="cursor-pointer text-secondary-100 block mb-10 text-xl">
                                <span className="mdi mdi-chevron-left text-xl "></span>
                                <span>Back </span>
                            </span>

                            <h2 className="mb-5 text-primary text-2xl">
                                The Well-RoundedSurgeon Leader
                            </h2>

                            <p className="font-bold mb-3 ">Nextgen Symposium</p>
                            <span className="text-secondary-200">
                                Leadership
                            </span>

                            <div className="grid lg:grid-cols-3 grid-cols-1 py-10 gap-4">
                                <div className="bg-white px-3 py-2 rounded-xl flex lg:flex-col lg:gap-1 flex-row ">
                                    <span className="text-primary text-lg">
                                        Date:
                                    </span>
                                    <span className="text-secondary-300 lg:text-sm text-sm lg:ps-0  ps-2">
                                        {" "}
                                        Tue - 17 May{" "}
                                    </span>
                                </div>
                                <div className="bg-white px-3 py-2 rounded-xl flex lg:flex-col lg:gap-1 flex-row ">
                                    <span className="text-primary text-lg">
                                        Time:
                                    </span>
                                    <span className="text-secondary-300 lg:text-xs text-sm lg:ps-0  ps-2">
                                        10:30 AM - 12:00 PM
                                    </span>
                                </div>
                                <div className="bg-white px-3 py-2 rounded-xl flex lg:gap-1 lg:flex-col flex-row items-center justify-start">
                                    <span className="text-primary text-lg">
                                        Location:
                                    </span>
                                    <span className="text-secondary-300 lg:text-xs text-sm lg:ps-0 ps-2">
                                        Egypt , Cairo{" "}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-primary text-2xl mb-6">
                                    Moderators
                                </h2>
                                <span className="text-secondary-100">
                                    Dr.Ahmed ehab
                                </span>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-primary text-2xl mb-6">
                                    Speakers
                                </h2>

                                <div className="flex items-center h-full gap-8 bg-white py-5  mb-5">
                                    <div className="w-24 h-24">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={heros.speaker_1.src}
                                            alt=""
                                        />
                                    </div>

                                    <div className="w-full h-full  border-l-2 border-primary px-5">
                                        <h2 className="mb-5">Dr.Ahmed ehab</h2>
                                        <span className="text-secondary-200 lg:text-base text-sm">
                                            Head of the Department of Oral and
                                            Dental Surgery
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center h-full gap-8 bg-white">
                                    <div className="w-24 h-24">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={heros.speaker_1.src}
                                            alt=""
                                        />
                                    </div>

                                    <div className="w-full h-full  border-l-2 border-primary px-5">
                                        <h2 className="mb-5">Dr.Ahmed ehab</h2>
                                        <span className="text-secondary-200 lg:text-base text-sm">
                                            Head of the Department of Oral and
                                            Dental Surgery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </FormCard> */}
                    </div>
                        <div className=" hidden md:block md:col-span-4  md:order-2 order-1 mx-auto mt-24  ">
                            <div className="w-full aspect-[3/3.5] ">
                                <img
                                    className="w-full h-full object-cover rounded-r-2xl"
                                    src={heros.schedule_details_img.src}
                                    alt=""
                                />
                            </div>
                        </div>
                </div>

                <SharedCountDown />
                <StaticSponsorsAnimatedSection />
            </div>
        </div>
    );
}
