"use client";
import React from "react";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import BaseOutlineBtn from "../Base/BaseOutlineBtn";
import {
    RegistrationPackageOffer,
    RegistrationPackageOfferProgram,
} from "@/types/shared";
import { useRouter } from "next/navigation";

type Props = {
    offer: RegistrationPackageOffer;
    actionHander: (
        offer: RegistrationPackageOffer,
        selectedProgram: RegistrationPackageOfferProgram
    ) => void;
};

export default function SharedRegisterCard({ offer, actionHander }: Props) {
    const [selected, setSelected] = useState<RegistrationPackageOfferProgram>(
        offer.programs[0]
    );
    
    const router=useRouter()
    const getNowHander = () => {
        // actionHander(offer, selected);
        // router.push('/login')
    };

    return (
        <div className="bg-background rounded-3xl px-5 py-6 shadow-[0_0_1rem_#00000010]  ">
            <div className="w-full aspect-[4/2.5]  rounded-2xl overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={offer.image}
                    alt=""
                />
            </div>
            <div className="py-5">
                <h5 className="font-bold mb-1">{offer.title}</h5>
            </div>
            <div className="mb-5 ">
                <RadioGroup value={selected} onChange={setSelected}>
                    <div className="space-y-2">
                        {offer.programs.map((plan, index) => (
                            <Radio
                                key={index}
                                value={plan}
                                className={({ checked }) =>
                                    `
                                  ${
                                      checked
                                          ? "ring-1 ring-primary bg-primary/5"
                                          : ""
                                  }
                                    relative flex cursor-pointer rounded-lg px-5 py-2 focus:outline-none`
                                }
                            >
                                {({ checked }) => (
                                    <>
                                        <div
                                            className={`flex w-full items-center justify-between ${
                                                checked ? "" : ""
                                            }`}
                                        >
                                            <div className="">
                                                <p
                                                    className={`font-bold text-xl ${
                                                        checked
                                                            ? "text-primary"
                                                            : ""
                                                    }`}
                                                >
                                                    {plan.title}
                                                </p>
                                                <p className="text-xs ms-1 text-secondary-300 font-semibold">
                                                    {plan.subtitle}
                                                </p>
                                            </div>
                                            <div className={`w-4 h-4 shrink-0 text-primary text-xs bg-primary/10 rounded-full ring-1  flex items-center justify-center ${checked ? 'ring-primary': 'ring-primary/50'}`}>
                                                {checked && (
                                                    <span className="mdi mdi-check-bold"></span>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Radio>
                        ))}
                    </div>
                </RadioGroup>
            </div>
            <BaseOutlineBtn onClick={getNowHander}>
                <span>Get Now</span>
            </BaseOutlineBtn>
        </div>
    );
}
