"use client";

import React from "react";

import NavLinks from "../Base/NavLinks";



export default function AppNavBar() {
    return (
        <>
            <nav className=" absolute">
               
                <NavLinks isWithSponsors={true} colorInverted={true} />
            </nav>
        </>
    );
}
