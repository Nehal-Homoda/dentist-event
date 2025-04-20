import BaseRegisterCard from "@/components/shared/SharedRegisterCard";
import React from "react";

import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { REGISTRATION_PACKAGES_OFFERS } from "@/core/data/registrationPackages";


export default function page() {

    const { packages } =  REGISTRATION_PACKAGES_OFFERS

    return (
        <>
            <div className="">
                <SharedHeader pageName="Registeration" />

             



                <div className="container">
                    {packages.map((packageItem, packageIndex) => {
                        return (
                            <div key={packageIndex} className="py-20">
                                <div className="card-title text-center mb-10">
                                    <h2 className="section-title mb-5">
                                        {packageItem.title}
                                    </h2>
                                    <span className="lg:text-2xl text-xl  text-secondary-400">
                                        {packageItem.date}
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-5 sm:gap-3 xl:gap-14 container ">
                                    {packageItem.offers.map((item, index) => (
                                        <div key={index} className="">
                                            <BaseRegisterCard
                                                image={item.image}
                                                price={item.price}
                                                programList={item.programs}
                                                userTypeTitle={item.title}
                                            ></BaseRegisterCard>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <SharedCountDown />
                </div>
            </div>
        </>
    );
}
