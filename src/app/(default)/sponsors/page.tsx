"use client";

import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { getSponsorsService } from "@/services/appSharedServices";
import { Sponsor } from "@/types/shared";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
    const [sponsors, setSponsor] = useState<Sponsor[]>([]);

    const fetchSponsor = async () => {
        getSponsorsService().then((response) => {
            setSponsor(response);
        });
    };
    useEffect(() => {
        fetchSponsor();
    }, []);

    return (
        <div>
            <SharedHeader pageName="Sponsors" />
            <div className="container py-20">
                <h2 className="text-xl font-bold text-center mb-16">
                    Join the 150+ companies trusting maxline company
                </h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 ">
                    {sponsors.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center  justify-center px-4  py-5 bg-primary-light-800 rounded-xl border border-primary-light-400 "
                        >
                            <Link href={item.url || ""}>
                                <div className="lg:w-44 lg:h-44 w-36 h-36 ">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <SharedCountDown />
            </div>
        </div>
    );
}
