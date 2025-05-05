import { elements } from "@/core/AssetsManager";
import { getSponsor } from "@/services/appSharedServices";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SponsorsAnimatedSection() {
    // const sponsorsImg = [
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    //     elements.sponsor1,
    //     elements.sponsor2,
    //     elements.sponsor3,
    // ];

     const [sponsors, setSponsor] = useState([])
    
        const fetchSponsor = async () => {
            getSponsor().then((response) => {
                setSponsor(response)
            })
        }
        useEffect(() => {
            fetchSponsor()
        }, [])

    return (
        <div className="py-20 overflow-hidden">
            <h2 className="section-title text-center">
                Join the 150+ companies trusting maxline company
            </h2>
            <Link href="/sponsors">
                <div className="group  w-full flex gap-5  relative   before:absolute before:w-24 before:left-0 before:top-0 before:h-full before:content-['']  before:bg-gradient-to-r before:from-white  before:z-40 before:via-white/50 before:to-transparent after:z-40 after:absolute after:w-24 after:right-0 after:top-0 after:h-full after:content-['']  after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-white ">
                    <div className="flex-grow-0 flex-shrink-0   flex animate-[swip_25s_linear_infinite] group-hover:[animation-play-state:paused] justify-center gap-5  ">
                        {sponsors.map((item, index) => (
                            <div
                                className="flex-grow-0 flex-shrink-0 w-36 h-20"
                                key={index}
                            >
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex-grow-0 flex-shrink-0   flex animate-[swip_25s_linear_infinite] group-hover:[animation-play-state:paused] justify-center gap-5  ">
                        {sponsors.map((item, index) => (
                            <div
                                className="flex-grow-0 flex-shrink-0 w-36 h-20"
                                key={index}
                            >
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
