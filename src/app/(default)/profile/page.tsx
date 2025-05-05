'use client'

import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { heros, icons } from "@/core/AssetsManager";
import React from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import BaseOutlineBtn from "@/components/Base/BaseOutlineBtn";
import Link from "next/link";
import RoutesManager from "@/core/RoutesManager";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { logout } from "@/stores/auth/authSlice";
import { useRouter } from "next/navigation";


export default function page() {
    const dispatch = useDispatch()
    const router = useRouter();

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

    const user = useSelector((state: RootState) => state.counter.user);

    const logoutHandler = () => {
        dispatch(logout())
        router.replace('/')
    }
    return (
        <div>
            <SharedHeader pageName="profile" />
            <div className="container">
                <div className="flex flex-col lg:flex-row   justify-between items-start   ">
                    <div className="lg:flex lg:flex-row flex flex-col lg:gap-5 lg:items-center">
                        <div className=" bg-white rounded-full overflow-hidden lg:p-2 p-1 lg:w-36 lg:h-36 w-24 h-24  z-50  lg:-mt-36 -mt-12">
                           {user?.personalPhoto && <img
                                className="rounded-full  w-full h-full object-cover "
                                src={icons.icon_facebook.src}
                                alt=""
                            />} 
                        </div>
                        <div className="py-5  md:text-md ">
                            <h2 className="text-primary md:text-xl  text-md mb-5">
                               {user?.fullName}
                            </h2>
                            <p className="text-secondary-100 mb-2">
                                {user?.jobTitle}
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
                            href={"/edit"}
                            className="font-semibold text-primary flex-grow-0 flex-shrink-0 underline  "
                        >
                            <span className="mdi mdi-pen text-primary me-2"></span>
                            Edit Info
                        </Link>
                        <Link
                            href={`/editpassword`}
                            className=" font-semibold text-primary flex-grow-0 flex-shrink-0  underline "
                        >
                            <span className="mdi mdi-account-key text-primary me-2"></span>
                            Edit Password
                        </Link>
                        <button
                            onClick={logoutHandler}
                            className=" font-semibold text-primary flex-grow-0 flex-shrink-0  underline "
                        >
                            <span className="mdi mdi-logout text-primary me-2"></span>
                            Log out
                        </button>
                    </div>
                </div>

                <SharedCountDown></SharedCountDown>
            </div>

            <StaticSponsorsAnimatedSection />
        </div>
    );
}
