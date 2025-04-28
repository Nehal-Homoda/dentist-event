import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { heros, icons } from "@/core/AssetsManager";
import React from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import BaseOutlineBtn from "@/components/Base/BaseOutlineBtn";
import Link from "next/link";
import RoutesManager from "@/core/RoutesManager";

export default function page() {
    const socialLinks = [
        {
            name: "Linked in",
            icon: icons.icon_linkedin,
            link: RoutesManager.about,
        },
        {
            name: "Facebook",
            icon: icons.icon_facebook,
            link: RoutesManager.about,
        },
        {
            name: "Instagram",
            icon: icons.icon_instgram,
            link: RoutesManager.about,
        },
    ];
    return (
        <div>
            <SharedHeader pageName="profile" />
            <div className="container">
                <div className="flex flex-col lg:flex-row   justify-between items-start   ">
                    <div className="lg:flex lg:flex-row flex flex-col lg:gap-5 lg:items-center">
                        <div className=" lg:w-36 lg:h-36 w-24 h-24  z-50  lg:-mt-36 -mt-12">
                            <img
                                className="w-full h-full object-cover rounded-full border-[0.3em] lg:border-[0.5em]  border-white border-primary "
                                src={heros.package_card_img_2.src}
                                alt=""
                            />
                        </div>
                        <div className="py-5  md:text-md ">
                            <h2 className="text-primary md:text-md text-md mb-2">
                                Nehal Homoda
                            </h2>
                            <p className="text-secondary-100 mb-2">
                                Head of the Department of Oral and
                                Dental Surgery
                            </p>
                            <div className="flex items-center md:justify-center   md:gap-5 gap-4">
                                {socialLinks.map((item, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer  py-2 bg-primary-light-800 md:px-4 px-2 rounded-3xl  ring-1 ring-primary  placeholder:text-xs bg-white border-none outline-none "
                                    >
                                        <Link href={item.link}>
                                            <div className="flex items-center gap-2">
                                                <div className="lg:w-4 lg:h-4  w-5 h-5 ">
                                                    <img
                                                        className="w-full h-full object-contain"
                                                        src={item.icon.src}
                                                        alt=""
                                                    />
                                                </div>
                                                <span className="text-sm   text-secondary-100">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex   gap-7 lg:pt-5 ">
                        <Link
                            href={`/`}
                            className="font-semibold text-primary flex-grow-0 flex-shrink-0 underline  "
                        >
                            <span className="mdi mdi-pen text-primary me-2"></span>
                            Edit Info
                        </Link>
                        <Link
                            href={`/`}
                            className=" font-semibold text-primary flex-grow-0 flex-shrink-0  underline "
                        >
                            <span className="mdi mdi-account-key text-primary me-2"></span>
                            Edit Password
                        </Link>
                    </div>
                </div>

                <SharedCountDown></SharedCountDown>
            </div>

            {/* <StaticSponsorsAnimatedSection /> */}
        </div>
    );
}
