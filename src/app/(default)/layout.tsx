import AppFooter from "@/components/layout/AppFooter";
import AppNavBar from "@/components/layout/AppNavBar";
import React from "react";

export default function defaultlayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="h-[200vh] relative">
            <AppNavBar isWithSponsors={true} colorInverted={true} />
            {children}
            <AppFooter />
        </div>
    );
}
