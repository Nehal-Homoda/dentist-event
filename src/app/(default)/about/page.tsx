import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import { heros } from "@/core/AssetsManager";
import React from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";

export default function page() {
    return (
        <div>
            <SharedHeader pageName="About EAOMS" />
            <div className="container py-20">
                <div>
                    <h2 className="text-3xl text-center mb-20 leading-10 ">
                        Achievements Of <br />
                        Egyptian Association of Oral & Maxillofacial Surgery
                    </h2>
                    <div className="grid lg:grid-cols-2">
                        <div className="grid md:grid-cols-2">
                            <div className="text-secondary-100 md:order-1 order-2 leading-8 lg:py-8 lg:px-9 py-5 px-3 ">
                                <p>
                                    The Egyptian Association of Oral and
                                    Maxillofacial Surgery (EAOMS) is the leading
                                    national body dedicated to the advancement
                                    of oral and maxillofacial surgery through
                                    education, research, and clinical
                                    excellence.
                                </p>
                            </div>
                            <div className="w-full lg:h-full md:order-2 order-1 aspect-[3/2.5]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={heros.abstract_img_2.src}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="bg-primary-light lg:order-1 order-2 text-white leading-8 lg:py-8 lg:px-9 py-5 px-3 ">
                                <p>
                                    The Egyptian Association of Oral and
                                    Maxillofacial Surgery (EAOMS) was founded in
                                    2000 to unify and advance the field of OMFS
                                    in Egypt through education, training,
                                    collaboration, and scientific exchange.
                                </p>
                            </div>
                            <div className="w-full lg:h-full lg:order-2 order-1 aspect-[3/2.5]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={heros.dr_about_photo.src}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div
                                style={{
                                    backgroundImage: `url(${heros.dr_about_photo.src})`,
                                }}
                                className="lg:order-1 md:order-2 order-1 w-full lg:h-full aspect-[3/2.5]  bg-cover bg-no-repeat"
                            ></div>
                            <div className=" lg:order-2 md:order-1 order-2 bg-primary-light text-md text-white leading-8 lg:py-8 lg:px-9 py-5 px-3 ">
                                <p>
                                    EAOMS organizes a biennial International
                                    Conference in which eminent international
                                    speakers participate. These Conferences
                                    include training courses on recent advances
                                    in technologies in the field of Oral and
                                    Maxillofacial Surgery, as well as a large
                                    commercial exhibit.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div
                                style={{
                                    backgroundImage: `url(${heros.abstract_img_1.src})`,
                                }}
                                className="md:order-1 order-1 w-full lg:h-full aspect-[3/2.5]  bg-cover bg-no-repeat"
                            ></div>
                            <div className="md:order-2 order-1 text-secondary-100  leading-8 lg:py-8 lg:px-9 py-5 px-3 ">
                                <p>
                                    The Egyptian Journal of Oral & Maxillofacial
                                    Surgery (EJOMS), is the official publication
                                    of the Egyptian Association of Oral &
                                    Maxillofacial Surgeons (EAOMS).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-20">
                <h2 className="lg:text-3xl text-2xl text-center mb-10 leading-10 ">
                    Media Of Egyptian Association of Oral & Maxillofacial
                    Surgery
                </h2>

                <div className="grid grid-cols-9 lg:gap-5 gap-2">
                    <div className="col-span-4 grid grid-cols-2 lg:gap-5 gap-2">
                        <div className="w-full h-full">
                            <img
                                src={heros.media_dr_1.src}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="w-full h-full">
                            <img
                                src={heros.media_dr_2.src}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <img src={heros.media_vedio.src} alt="" />
                    </div>
                    <div className="col-span-3">
                        <div className="w-full h-full">
                            <img
                                src={heros.dr_media.src}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="w-full h-full">
                            <img
                                src={heros.dr_media.src}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="w-full h-full">
                            <img
                                src={heros.dr_media.src}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <SharedCountDown />
            <StaticSponsorsAnimatedSection />
        </div>
    );
}
