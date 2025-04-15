"use client";

import React from "react";
import { brand, elements } from "@/core/AssetsManager";
import NavLinks from "../Base/NavLinks";
import Button from "../Base/button";

const sponsorsImg = [elements.sponsor1, elements.sponsor2, elements.sponsor3];

export default function AppNavBar() {
    return (
        <>
            <nav className=" absolute">
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
                <NavLinks colorInverted={true} />
                <input className="outline-input" placeholder="nehe"/>
            </nav>
        </>
    );
}
