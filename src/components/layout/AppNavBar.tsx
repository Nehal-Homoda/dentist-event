"use client";

import React, { useEffect } from "react";

import RoutesManager from "@/core/RoutesManager";
import { elements, brand } from "@/core/AssetsManager";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BaseBtn from "@/components/Base/BaseBtn";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores/store";
import { enter } from "@/stores/auth/authSlice";
import { User } from "@/types/shared";

// const navLinks = [
//     { name: "Home", link: RoutesManager.home },
//     { name: "Registration", link: RoutesManager.registration },
//     { name: "Schedule", link: RoutesManager.schedule },
//     { name: "Abstract", link: RoutesManager.abstract },
//     { name: "about", link: RoutesManager.about },
//     { name: "accomedation", link: RoutesManager.accomedation },
//     { name: "sponsors", link: RoutesManager.sponsors },
//     { name: "profile", link: RoutesManager.profile },
// ];

type Props = {
    colorInverted: Boolean;
    isWithSponsors: Boolean;
};

const sponsorsImg = [elements.sponsor1, elements.sponsor2, elements.sponsor3];

export default function AppNavBar({ colorInverted, isWithSponsors }: Props) {
    const pathName = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.counter.user);
    const router = useRouter();

    const navLinks = [
        { name: "Home", link: RoutesManager.home },
        { name: "Registration", link: RoutesManager.registration },
        { name: "Schedule", link: RoutesManager.schedule },
        { name: "Abstract", link: RoutesManager.abstract },
        { name: "about", link: "/about" },
        { name: "accomedation", link: RoutesManager.accomedation },
        { name: "sponsors", link: RoutesManager.sponsors },
    ];

    const loginBtnHandler = () => {
        router.push("/login");
    };

    useEffect(() => {
        dispatch(enter());
    }, []);
    return (
        <>
            <div className="container absolute z-30 left-[50%] -translate-x-[50%]  top-10 ">
                {isWithSponsors && (
                    <div className="w-full bg-background flex justify-between items-center px-5 lg:px-12 ">
                        <div className="w-24 h-24">
                            <img
                                src={brand.logo_text.src}
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>

                        {/* {sponsorsImg.map((item, index) => (
                            <div key={index} className="w-28 h-28 ">
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.src}
                                    alt=""
                                />
                            </div>
                        ))} */}
                        <div className="">
                            {!user && (
                                <BaseBtn
                                    handleBtnAction={loginBtnHandler}
                                    isWithArrow={false}
                                >
                                    <span>Login Now !</span>
                                </BaseBtn>
                            )}
                        </div>
                    </div>
                )}
                <div
                    className={`overflow-auto capitalize  ${
                        colorInverted
                            ? "bg-primary-light "
                            : "bg-white text-primary rounded-md gap-12"
                    }  text-background   flex gap-7 px-5  lg:px-12 py-4`}
                    // }  text-background  flex justify-between px-5  lg:px-12 py-4`}
                >
                    {navLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={
                                item.link == pathName
                                    ? `relative before:absolute before:w-full before:content-[''] ${
                                          colorInverted
                                              ? "before:bg-background"
                                              : "before:bg-primary"
                                      } before:bg-background  before:h-1  before:top-7 `
                                    : "bg-yellow"
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                    {user && (
                        <Link
                            href={"/profile"}
                            className={
                                "/profile" == pathName
                                    ? `relative before:absolute before:w-full before:content-[''] ${
                                          colorInverted
                                              ? "before:bg-background"
                                              : "before:bg-primary"
                                      } before:bg-background  before:h-1  before:top-7 `
                                    : "bg-yellow"
                            }
                        >
                            Profile
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
