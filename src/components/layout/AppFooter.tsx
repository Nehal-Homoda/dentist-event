import React from "react";
import { bg, brand } from "@/core/AssetsManager";

export default function AppFooter() {
    return (
        <>
            <div className="container pb-10">
                <footer
                    className="text-white w-full py-10 px-5 bg-cover rounded-t-2xl"
                    style={{
                        backgroundImage: `url('${bg.footer_bg.src}')`,
                        backgroundPosition: 'center top'
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-10">
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
                        <div className="md:col-span-4">
                            <h5 className="text-white font-semibold mb-5">
                            Stay in touch with us 
                            </h5>
                            <p className="text-xs pe-10 leading-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  the industry's standard 
                            </p>

                            <div className="input-wrap flex">
                              <input type="text" /> 
                              <button>dsfds</button>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
