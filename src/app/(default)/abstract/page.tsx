import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import WhySubmitSection from "@/components/static/WhySubmitSection";
import { heros } from "@/core/AssetsManager";
import React from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";

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
                            >

                            </div>
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
                                key={index}
                                className="flex flex-col gap-4  items-center rounded-xl border border-primary bg-primary-light-800 px-5 py-10 "
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

                <WhySubmitSection></WhySubmitSection>
                <SharedCountDown />
                <StaticSponsorsAnimatedSection />
            </div>
        </div>
    );
}
