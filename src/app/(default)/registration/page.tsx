import BaseRegisterCard from "@/components/shared/SharedRegisterCard";
import React from "react";
import { elements } from "@/core/AssetsManager";

const cards = [
    {
        title: "Member",
        price: "250$",
        image: elements.sponsor1.src,
        programs: [
            "asa",
            "adad",
            "suidh",
            "asa",
            "adad",
            "suidh",
            "suidh",
            "asa",
            "adad",
            "suidh",
        ],
    },
    {
        title: "Premium",
        price: "450$",
        image: elements.sponsor2.src,
        programs: ["ads", "asuidfjh"],
    },
    {
        title: "Premium",
        price: "450$",
        image: elements.sponsor3.src,
        programs: ["ads", "asuidfjh"],
    },
];
// const programList = ["asa", "adad", "ads"];
export default function page() {
    return (
        <>
            <div className="pt-[300px]">
                <div className="card-title text-center py-5">
                    <h1 className="lg:text-4xl text-2xl font-bold mb-4">
                        Early Bird Registration
                    </h1>
                    <span className="lg:text-2xl text-xl  text-secondary-400">
                        March 17, 2025
                    </span>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 container ">
                    {cards.map((item, index) => (
                        <div key={index} className="">
                            <BaseRegisterCard
                                image={elements.sponsor1.src}
                                price="250$"
                                programList={item.programs}
                                userTypeTitle="Member"
                            ></BaseRegisterCard>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-[100px]">
                <div className="card-title text-center py-5">
                    <h1 className="lg:text-4xl text-2xl font-bold mb-4">
                        Early Bird Registration
                    </h1>
                    <span className="lg:text-2xl text-xl  text-secondary-400">
                        March 17, 2025
                    </span>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 container ">
                    {cards.map((item, index) => (
                        <div key={index} className="">
                            <BaseRegisterCard
                                image={elements.sponsor1.src}
                                price="250$"
                                programList={item.programs}
                                userTypeTitle="Member"
                            ></BaseRegisterCard>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-[100px]">
                <div className="card-title text-center py-5">
                    <h1 className="lg:text-4xl text-2xl font-bold mb-4">
                        Early Bird Registration
                    </h1>
                    <span className="lg:text-2xl text-xl  text-secondary-400">
                        March 17, 2025
                    </span>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 container ">
                    {cards.map((item, index) => (
                        <div key={index} className="">
                            <BaseRegisterCard
                                image={elements.sponsor1.src}
                                price="250$"
                                programList={item.programs}
                                userTypeTitle="Member"
                            ></BaseRegisterCard>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
