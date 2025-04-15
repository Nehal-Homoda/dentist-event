import React from "react";
import { bg, brand } from "@/core/AssetsManager";

export default function AppFooter() {
    return (
        <>
            <div className="container pb-10">
                <footer
                    className="text-white w-full py-10 px-5 bg-cover rounded-t-2xl"
                    style={{
                        background: `url('${bg.footer_bg.src}') no-repeat top`,
                    }}
                >
                    <div className="grid grid-cols-10">
                        <div className="brand col-span-1">
                            <img
                                src={brand.logo.src}
                                className="w-full max-h-[200px] object-contain"
                                alt=""
                            />
                        </div>
                        <div className="details">
                            <h5 className="text-white text-lg">Location</h5>
                            <p className="text-sm">Egypt, Cairo</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
