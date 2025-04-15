import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import RoutesManager from "@/core/RoutesManager";
import { brand, elements } from "@/core/AssetsManager";
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
export default function NavLinks({ colorInverted, isWithSponsors }: Props) {
    const pathName = usePathname();
    return (
        <>
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
                        <div className="w-28 h-28 ">
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
                    colorInverted ? "bg-primary-light" : "bg-white"
                }  text-background rounded-md flex justify-between gap-12  px-12 py-4`}
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
        </>
    );
}
