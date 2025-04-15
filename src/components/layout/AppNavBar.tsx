"use client";

import React from "react";
import ButtonWithArrow from "../Base/ButtonWithArrow";
import RoutesManager from "@/core/RoutesManager";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons, sponsors } from "@/core/AssetsManager";

const navLinks = [
    { name: "Home", link: RoutesManager.home },
    { name: "Registration", link: RoutesManager.registration },
    { name: "Schedule", link: RoutesManager.schedule },
    { name: "Abstract", link: RoutesManager.abstract },
    { name: "about", link: RoutesManager.about },
    { name: "accomedation", link: RoutesManager.accomedation },
    { name: "sponsors", link: RoutesManager.sponsors },
    { name: "profile", link: RoutesManager.profile },
];

const sponsorsImg = [sponsors.sponsor1, sponsors.sponsor2, sponsors.sponsor3];

export default function AppNavBar() {
    const pathName = usePathname();
    return (
        <>
            <nav className=" absolute">
                <div className="bg-background flex justify-between items-center  px-12 ">
                    <div className="w-24 h-24">
                        <img
                            src={icons.logo.src}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>

                    {sponsorsImg.map((item, index) => (
                        <div className="w-12 h-12 object-contain">
                            <img className="w-full h-full flex-shrink-0 flex-grow-0" src={item.src} alt="" />
                        </div>
                    ))}
                    <ButtonWithArrow
                        btnName="Register Now !"
                        withArrow="true"
                    />
                </div>
                <div className="  bg-primary-light text-background rounded-md flex justify-center gap-12  px-12 py-4">
                    {navLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={
                                item.link == pathName
                                    ? "relative before:absolute before:w-full before:content-[''] before:bg-background  before:h-1  before:top-7 "
                                    : "bg-yellow"
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
