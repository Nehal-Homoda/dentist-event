import React from "react";
import ButtonWithArrow from "../Base/ButtonWithArrow";
import RoutesManager from "@/core/RoutesManager";
import Link from "next/link";

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

export default function AppNavBar() {
    return (
        // <div className="">
            <nav>
                <div className="w-[1000px] mx-auto sticky top-0 mt-10   bg-primary-light text-background rounded-md flex justify-between px-12 py-4">
                    {navLinks.map((item, index) => (
                        <Link key={index} href="">{item.name}</Link>
                    ))}
                </div>
            </nav>
                {/* <ButtonWithArrow btnName="Register Now !" withArrow="true" /> */}
        // </div>
    );
}
