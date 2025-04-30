"use client";

import React, { useEffect, useState } from "react";
import { bg, brand } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";
import { getSetting } from "@/services/appSharedServices";
import { error } from "console";
import { AppSettingData } from "@/types/shared";
// import { fetchFooterSetting } from "@/services/settings/footerSetting";

export default function AppFooter() {
    const [data, setData] = useState<AppSettingData | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchFooterSetting = async () => {
        getSetting()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };
    // const fetchData = async () => {

    //     try {
    //         const res = await fetch('http://yousofsalah-001-site4.anytempurl.com/api/Data/GetSetting');

    //         if (!res.ok) throw('connection error');

    //         const data = res.json();

    //         console.log("response data =>> ", data)
    //     } catch (error) {

    //         //@ts-ignore
    //         console.log(error.message)
    //     }
    // }

    const sendAction = () => {};

    useEffect(() => {
        fetchFooterSetting();
    }, []);

    return (
        <>
            <div>
                <footer
                    className="text-white w-full bg-cover px-5"
                    style={{
                        backgroundImage: `url('${bg.footer_bg.src}')`,
                        backgroundPosition: "center top",
                    }}
                >
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-10 py-16">
                            <div className="brand col-span-1">
                                <img
                                    src={brand.logo.src}
                                    className="max-h-[200px] object-contain"
                                    alt=""
                                />
                            </div>
                            <div className="p-5 col-span-1"></div>
                            <div className="details md:col-span-4">
                                {/* location */}
                                <h5 className="text-white font-semibold mb-2">
                                    Location
                                </h5>
                                <p className="text-xs ">
                                    <span className="mdi mdi-map-marker-outline me-1"></span>
                                    {data?.location}
                                </p>

                                {/* contact info */}
                                <h5 className="text-white font-semibold mb-2 mt-5">
                                    Contact Info
                                </h5>
                                <div className="flex gap-5">
                                    <a
                                        href={`mailto:${data?.mail}`}
                                        className="text-xs "
                                    >
                                        <span className="mdi mdi-email-outline me-1"></span>
                                        {data?.mail}
                                    </a>
                                    <a
                                        href="tel:01201354511"
                                        className="text-xs "
                                    >
                                        <span className="mdi mdi-phone me-1"></span>
                                        {data?.phone}
                                    </a>
                                </div>
                                {/* social links */}
                                <h5 className="text-white font-semibold mb-2 mt-5">
                                    Social Links
                                </h5>
                                <div className="flex gap-5">
                                    <a
                                        href={data?.facebookUrl}
                                        target="_blank"
                                        className="text-xs "
                                    >
                                        <span className="mdi mdi-facebook me-1"></span>
                                        Facebook
                                    </a>
                                    <a
                                        href={data?.instagramUrl}
                                        target="_blank"
                                        className="text-xs "
                                    >
                                        <span className="mdi mdi-instagram me-1"></span>
                                        Instagram
                                    </a>
                                    <a
                                        href={data?.linkedinUrl}
                                        target="_blank"
                                        className="text-xs "
                                    >
                                        <span className="mdi mdi-linkedin me-1"></span>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                            {/* <div className="p-5 col-span-1"></div> */}
                            <div className="md:col-span-4 mt-10">
                                <h5 className="text-white font-semibold mb-5">
                                    Stay in touch with us
                                </h5>
                                <p className="text-xs pe-10 leading-6">
                                    {data?.about}
                                </p>

                                <div className="input-wrap flex gap-5 mt-12">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="w-full rounded-full placeholder:text-xs text-foreground outline-none border-none px-5"
                                    />
                                    <BaseBtn
                                        handleBtnAction={sendAction}
                                        minWidth="min-w-[5rem]"
                                    >
                                        Send Now
                                    </BaseBtn>
                                </div>
                            </div>
                        </div>
                        <div className="divider w-full h-[0.01rem] bg-white/30"></div>
                        <div className="copyright py-3 text-center text-sm">
                            © {new Date().getFullYear()}{" "}
                            <a className="text-primary font-bold" href="/">
                                EAOMS
                            </a>
                            . All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
