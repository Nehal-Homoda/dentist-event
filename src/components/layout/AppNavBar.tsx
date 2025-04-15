"use client";

import React from "react";

import RoutesManager from "@/core/RoutesManager";
import { elements,brand } from "@/core/AssetsManager";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Base/button";

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

type Props = {
    colorInverted: Boolean;
    isWithSponsors: Boolean;
};

const sponsorsImg = [elements.sponsor1, elements.sponsor2, elements.sponsor3];

export default function AppNavBar({ colorInverted, isWithSponsors }: Props) {
    const pathName = usePathname();
    return (
        <>
            <div className="container absolute left-[50%] -translate-x-[50%]  top-10 ">
                {isWithSponsors && (
                    <div className="w-full bg-background flex justify-between items-center  px-12 ">
                        <div className="w-24 h-24">
                            <img
                                src={brand.logo_text.src}
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>

                        {sponsorsImg.map((item, index) => (
                            <div key={index} className="w-28 h-28 ">
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.src}
                                    alt=""
                                />
                            </div>
                        ))}
                        <Button isWithArrow={false}>
                            <span>Register Now !</span>
                        </Button>
                    </div>
                )}
                <div
                    className={` ${
                        colorInverted
                            ? "bg-primary-light rounded-b-md"
                            : "bg-white rounded-md gap-12"
                    }  text-background  flex justify-between   px-12 py-4`}
                >
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
            </div>
        </>
    );
}
