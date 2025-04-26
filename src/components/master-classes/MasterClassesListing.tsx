"use client";
import React, { useEffect, useState } from "react";
import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import { getMasterClasses } from "@/services/appSharedServices";
import { AppMasterClass } from "@/types/shared";

export default function MasterClassesListing() {
    const [data, setData] = useState<AppMasterClass[] | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchMasterClasses = async () => {

        getMasterClasses()
        .then(resposne => {

            setData(resposne);
        })
        .catch(error => {
            setErrorMessage(error);
        })
    };

    useEffect(() => {
        fetchMasterClasses()
    }, [])
    return (
        <div className="py-20">
            <h2 className="section-title text-center">
                Lorem Ipsum is <br />
                simply dummy text of the printing{" "}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 container gap-5 mt-10">
                {data?.map((item, index) => (
                    <SharedCardWithShadow
                        key={index}
                        image={item.image}
                        title={item.name}
                    />
                ))}
            </div>
        </div>
    );
}
