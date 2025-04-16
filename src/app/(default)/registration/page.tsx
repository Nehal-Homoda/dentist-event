import BaseRegisterCard from "@/components/shared/BaseRegisterCard";
import React from "react";
import { elements } from "@/core/AssetsManager";

const cards = [
    {
        title: "Member",
        price: "250$",
        image: elements.sponsor1.src,
        programs: ["asa", "adad", "suidh"],
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
      <div className="py-[300px]">

        <div className="grid grid-cols-3 gap-14 container ">
            {cards.map((item, index) => (
                <BaseRegisterCard  key={index}
                    image={elements.sponsor1.src}
                    price="250$"
                    programList={item.programs}
                    userTypeTitle="Member"
                ></BaseRegisterCard>
            ))}
        </div>
      </div>
    );
}
