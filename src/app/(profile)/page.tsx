import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import InterduceSection from "@/components/static/InterduceSection";
import RegisterSectionWithVedio from "@/components/static/RegisterSectionWithVedio";
import SponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import WhySubmitSection from "@/components/static/WhySubmitSection";

import { elements, heros, icons } from "@/core/AssetsManager";

export default function Home() {
    const courses = [
        {
            image: heros.interduce_thumbnail.src,
            title: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            image: heros.interduce_thumbnail.src,
            title: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            image: heros.interduce_thumbnail.src,
            title: "Lorem Ipsum is simply dummy text of the printing",
        },
    ];
    const headerStats = [
        { amount: 500, title: "Visitors" },
        { amount: 150, title: "Speakers" },
        { amount: 1000, title: "Doctors" },
        { amount: 75, title: "Sponsors" },
    ];
    const galance = [
        {
            day: "Thursday , May 22 , 2025",
            program: [
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
        {
            day: "Thursday , May 22 , 2025",
            program: [
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
        {
            day: "Thursday , May 22 , 2025",
            program: [
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
        {
            day: "Thursday , May 22 , 2025",
            program: [
                {
                    date: "07 : 30 - 09:30 pm",
                    course: "Master Classes Master Classes Master Classes Master Classes Master Classes  Master Classes  Master Classes  Master Classes ",
                },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
        {
            day: "Thursday , May 22 , 2025",
            program: [
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
        {
            day: "Thursday , May 22 , 2025",
            program: [
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
                { date: "07 : 30 - 09:30 pm", course: "Master Classes" },
            ],
        },
    ];

    return (
        <>
            <div className="home-page">
                <header className="text-white w-full aspect-[3/4.75] sm:aspect-[3/2.75] md:aspect-[3/2.25] lg:aspect-[3/1.75] xl:aspect-[3/1.4] bg-[url('@/assets/images/bg/header.png')] bg-no-repeat bg-cover bg-top">
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
                    <div className="py-20">
                    <h2 className="section-title text-center">
                            Lorem Ipsum is <br />
                            simply dummy text of the printing{" "}
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 container gap-5 lg:gap-10 mt-10">
                            {courses.map((item, index) => (
                                <SharedCardWithShadow
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))}
                            {/* <SharedCardWithShadow />
                        <SharedCardWithShadow /> */}
                        </div>
                    </div>

                    <WhySubmitSection></WhySubmitSection>
                    <RegisterSectionWithVedio></RegisterSectionWithVedio>

                    <div className="py-20 ">
                        <h2 className="section-title text-center">Program At A Galance</h2>
                        <div className="grid lg:grid-cols-2 gap-5">
                            {galance.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-primary-light-800 px-9 py-16 rounded-xl text-muted "
                                >
                                    <h1 className="text-2xl text-primary mb-10 ">
                                        {item.day}
                                    </h1>
                                    {item.program.map((item, index) => (
                                        <div
                                            key={index}
                                            className="h-auto outline-input grid grid-cols-8 py-2 mb-6"
                                        >
                                            <div className="col-span-3 border-primary border-r">
                                                <h1 className="">
                                                    {item.date}
                                                </h1>
                                            </div>
                                            <div className="col-span-5 ms-5">
                                                <div>{item.course}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <SponsorsAnimatedSection></SponsorsAnimatedSection>
                </div>
            </div>
        </>
    );
}
