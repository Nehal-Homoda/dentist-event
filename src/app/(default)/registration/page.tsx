import React from "react";

import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { REGISTRATION_PACKAGES } from "@/core/data/registrationPackages";
import RegistrationPackageListing from "@/components/registration/RegistrationPackageListing";


export default function page() {


    return (
        <>
            <div className="">
                <SharedHeader pageName="Registeration" />

                <div className="container">
                    <RegistrationPackageListing packages={REGISTRATION_PACKAGES}></RegistrationPackageListing>
                    <SharedCountDown />
                </div>
            </div>
        </>
    );
}
