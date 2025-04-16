import React from "react";
import { bg, brand } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";

export default function AppFooter() {
    return (
        <>
            <div className="container">
                <footer
                    className="text-white w-full bg-cover px-5 rounded-t-2xl"
                    style={{
                        backgroundImage: `url('${bg.footer_bg.src}')`,
                        backgroundPosition: "center top",
                    }}
                >
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
                                Egypt, Cairo
                            </p>

                            {/* contact info */}
                            <h5 className="text-white font-semibold mb-2 mt-5">
                                Contact Info
                            </h5>
                            <div className="flex gap-5">
                                <a
                                    href="mailto:EAOMS@mail.com"
                                    className="text-xs "
                                >
                                    <span className="mdi mdi-email-outline me-1"></span>
                                    EAOMS@mail.com
                                </a>
                                <a href="tel:01201354511" className="text-xs ">
                                    <span className="mdi mdi-phone me-1"></span>
                                    01201354511
                                </a>
                            </div>
                            {/* social links */}
                            <h5 className="text-white font-semibold mb-2 mt-5">
                                Social Links
                            </h5>
                            <div className="flex gap-5">
                                <a
                                    href="mailto:EAOMS@mail.com"
                                    className="text-xs "
                                >
                                    <span className="mdi mdi-facebook me-1"></span>
                                    Facebook
                                </a>
                                <a href="tel:01201354511" className="text-xs ">
                                    <span className="mdi mdi-instagram me-1"></span>
                                    Instagram
                                </a>
                                <a href="tel:01201354511" className="text-xs ">
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
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has the
                                industry's standard
                            </p>

                            <div className="input-wrap flex gap-5 mt-12">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full rounded-full placeholder:text-xs text-foreground outline-none border-none px-5"
                                />
                                <BaseBtn minWidth="min-w-[5rem]">
                                    Send Now
                                </BaseBtn>
                            </div>
                        </div>
                    </div>
                    <div className="divider w-full h-[0.01rem] bg-white/30"></div>
                    <div className="copyright py-3 text-center text-sm">
                    © {new Date().getFullYear()} <a className="text-primary font-bold" href="/">EAOMS</a>. All rights reserved
                    </div>
                </footer>
            </div>
        </>
    );
}
