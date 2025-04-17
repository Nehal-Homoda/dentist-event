import BaseRegisterCard from "@/components/shared/SharedRegisterCard";
import React from "react";
import { bg, elements, heros } from "@/core/AssetsManager";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";

const cards = [
    {
        title: "EAOMS Members",
        price: "$150",
        image: heros.why_submit.src,
        programs: [
            "Lorem  Ipsum ",
            "Your Startup",
            "Winning Metric for Your Startup",
        ],
    },
    {
        title: "Non IAOMS Members",
        price: "$250",
        image: heros.why_submit.src,
        programs: [
            "Lorem  Ipsum ",
            "Your Startup",
            "Winning Metric for Your Startup",
        ],
    },
    {
        title: "Trainees / Residents",
        price: "$170",
        image: heros.why_submit.src,
        programs: [
            "Lorem  Ipsum ",
            "Your Startup",
            "Winning Metric for Your Startup",
        ],
    },
];
// const programList = ["asa", "adad", "ads"];
export default function page() {
    const packages = [
        {
            title: "Early Bird Registration",
            date: "March 17, 2025",
            offers: [
                {
                    title: "EAOMS Members",
                    price: "$150",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Non IAOMS Members",
                    price: "$250",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Trainees / Residents",
                    price: "$170",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
            ],
        },
        {
            title: "Regular Registration",
            date: "March 18 - May 14, 2025",
            offers: [
                {
                    title: "EAOMS Members",
                    price: "$150",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Non IAOMS Members",
                    price: "$250",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Trainees / Residents",
                    price: "$170",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
            ],
        },
        {
            title: "Late/On-Site Registration",
            date: "May 15 - May 25, 2025",
            offers: [
                {
                    title: "EAOMS Members",
                    price: "$150",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Non IAOMS Members",
                    price: "$250",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
                {
                    title: "Trainees / Residents",
                    price: "$170",
                    image: heros.why_submit.src,
                    programs: [
                        "Lorem  Ipsum ",
                        "Your Startup",
                        "Winning Metric for Your Startup",
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <div className="">
               <SharedHeader pageName="Registeration"/>
              
                <div className="container">
                    {packages.map((packageItem, packageIndex) => {
                        return (
                            <div key={packageIndex} className="py-20">
                                <div className="card-title text-center mb-10">
                                    <h2 className="section-title mb-5">
                                        {packageItem.title}
                                    </h2>
                                    <span className="lg:text-2xl text-xl  text-secondary-400">
                                        {packageItem.date}
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-5 sm:gap-3 xl:gap-14 container ">
                                    {packageItem.offers.map((item, index) => (
                                        <div key={index} className="">
                                            <BaseRegisterCard
                                                image={heros.why_submit.src}
                                                price={item.price}
                                                programList={item.programs}
                                                userTypeTitle={item.title}
                                            ></BaseRegisterCard>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <SharedCountDown />
                </div>
            </div>
        </>
    );
}
