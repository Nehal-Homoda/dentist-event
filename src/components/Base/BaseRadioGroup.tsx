"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
    {
        name: "Startup",
        ram: "12GB",
        cpus: "6 CPUs",
        disk: "160 GB SSD disk",
    },
    {
        name: "Business",
        ram: "16GB",
        cpus: "8 CPUs",
        disk: "512 GB SSD disk",
    },
    {
        name: "Enterprise",
        ram: "32GB",
        cpus: "12 CPUs",
        disk: "1024 GB SSD disk",
    },
];

export default function BaseRadioGroup() {
    const [selected, setSelected] = useState(plans[0]);

    return (
        <RadioGroup value={selected} onChange={setSelected}>
            <div className="space-y-2">
                {plans.map((plan) => (
                    <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active, checked }) =>
                            `${
                                active
                                    ? "ring-1 ring-primary"
                                    : ""
                            }
                  ${checked ? "ring-1 ring-primary" : ""}
                    relative flex cursor-pointer rounded-lg px-5 py-2 focus:outline-none`
                        }
                    >
                        {({ active, checked }) => (
                            <>
                                <div className="flex w-full items-center justify-between">
                                    <span className="text-sm ms-1">
                                        Till 17 Jul
                                    </span>
                                    <span className={`font-bold text-lg ${checked ? 'text-primary' : ''}`}>$500</span>
                                    {/* <div className="flex items-center">
                                        <div className="text-sm flex items-center justify-between">
                                               
                                        </div>
                                    </div> */}
                                    {/* <div className="w-6 h-6 shrink-0 text-white">
                                        {checked && (
                                            <CheckIcon className="h-6 w-6" />
                                        )}
                                    </div> */}
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
