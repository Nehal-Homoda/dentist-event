import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import RoutesManager from "@/core/RoutesManager";


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

type Props={
    colorInverted:Boolean
}
export default function NavLinks({colorInverted}:Props) {
    const pathName = usePathname();
    return (
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
    );
}
