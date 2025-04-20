"use client"
import { RegistrationPackage, RegistrationPackageOffer, RegistrationPackageOfferProgram } from "@/types/shared";
import React from "react";

import RegistrationPackageOfferCard from "@/components/registration/RegistrationPackageOfferCard";


type Props = {
    packages: RegistrationPackage[]

}

export default function RegistrationPackageListing({packages}: Props) {


    const getTheOfferHandler = (offer: RegistrationPackageOffer, selectedProgram: RegistrationPackageOfferProgram) => {
        console.log('outtttttttt offer', offer)
        console.log('outtttttttt program', selectedProgram)
    }

    return (
        <>
            {packages.map((packageItem, packageIndex) => {
                return (
                    <div key={packageIndex} className="py-20">
                        <div className="card-title text-center mb-10">
                            <h2 className="section-title mb-5">
                                {packageItem.title}
                            </h2>
                            <span className="lg:text-2xl text-xl  text-secondary-400">
                                {packageItem.description}
                            </span>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4 xl:gap-5 container ">
                            {packageItem.offers.map((item, index) => (
                                <div key={index} className="">
                                    <RegistrationPackageOfferCard
                                        actionHander={getTheOfferHandler}
                                        key={index}
                                        offer={item}
                                    ></RegistrationPackageOfferCard>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
}
