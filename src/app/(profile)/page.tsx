import MasterClassesListing from "@/components/master-classes/MasterClassesListing";
import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import InterduceSection from "@/components/static/InterduceSection";
import ProgramsActionsDates from "@/components/static/ProgramsActionsDates";
import RegisterSectionWithVedio from "@/components/static/RegisterSectionWithVedio";
import SponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import WhySubmitSection from "@/components/static/WhySubmitSection";

import { icons, bg } from "@/core/AssetsManager";

export default function Home() {

    
    const headerStats = [
        { amount: 500, title: "Visitors" },
        { amount: 150, title: "Speakers" },
        { amount: 1000, title: "Doctors" },
        { amount: 75, title: "Sponsors" },
    ];
    

    return (
        <>
            <div className="home-page">
                <header style={{ backgroundImage: `url('${bg.header_bg.src}')` }} className="text-white w-full aspect-[3/4.75] sm:aspect-[3/2.75] md:aspect-[3/2.25] lg:aspect-[3/1.75] xl:aspect-[3/1.4]  bg-no-repeat bg-cover bg-top">
                    <div className="w-full h-full bg-black/50 flex flex-col justify-end">
                        <div className="container ">
                            <div className="wrap flex gap-5 sm:gap-10 mb-5 md:mb-10">
                                {/* CALENDER */}
                                <div className=" sm:text-xl flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 sm:mb-1">
                                        <img
                                            src={
                                                icons.icon_calender_colorful.src
                                            }
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span>17 - 18 May 2025</span>
                                </div>
                                {/* LOCATION */}
                                <div className="sm:text-xl flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 sm:mb-1">
                                        <img
                                            src={
                                                icons.icon_location_colorful.src
                                            }
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span>Egypt , Cairo</span>
                                </div>
                            </div>
                            <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-semibold">
                                Egyptian Association of Oral &
                                <br />
                                Maxillofacial Surgery
                            </h1>
                            <div className="wrap flex flex-wrap items-center py-7 md:py-14 md:gap-10">
                                {headerStats.map((item, index) => (
                                    <div
                                        key={index}
                                        className="item text-center border-l-2 px-5 border-primary mb-5"
                                    >
                                        <h5 className="text-lg md:text-3xl font-bold whitespace-nowrap">
                                            {item.amount} +
                                        </h5>
                                        <p className="text-xs md:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <InterduceSection></InterduceSection>
                    <SharedCountDown />
                    <MasterClassesListing></MasterClassesListing>

                    <WhySubmitSection></WhySubmitSection>
                    <RegisterSectionWithVedio></RegisterSectionWithVedio>

                    {/* <ProgramsActionsDates></ProgramsActionsDates> */}

                    {/* <SponsorsAnimatedSection></SponsorsAnimatedSection> */}
                </div>
            </div>
        </>
    );
}
