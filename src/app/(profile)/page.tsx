import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import InterduceSection from "@/components/static/InterduceSection";
import RegisterSectionWithVedio from "@/components/static/RegisterSectionWithVedio";
import WhySubmitSection from "@/components/static/WhySubmitSection";
import { elements, heros } from "@/core/AssetsManager";

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

    const sponsorsImg = [
        elements.sponsor1,
        elements.sponsor2,
        elements.sponsor3,
    ];
    return (
        <>
            <div className="home-page">
                <div className="w-full aspect-[1.5/1] bg-[url('@/assets/images/bg/header.png')] bg-no-repeat bg-cover bg-top"></div>

                <div className="container">
                    <InterduceSection></InterduceSection>
                    <SharedCountDown />
                    <div className="py-20">
                        <h1 className="text-3xl text-center mb-16 ">
                            Lorem Ipsum is <br />
                            simply dummy text of the printing{" "}
                        </h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container gap-10 mt-10">
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
                    <div className="py-20 ">
                        <h1 className="text-3xl text-center mb-16 font-semibold'">
                            Program At A Galance
                        </h1>
                        <div className="grid lg:grid-cols-2 gap-5">
                            {galance.map((item, index) => (
                                <div key={index} className="bg-primary-light-800 px-9 py-16 rounded-xl text-muted ">
                                    <h1 className="text-2xl text-primary mb-10 ">
                                        {item.day}
                                    </h1>
                                    {item.program.map((item, index) => (
                                        <div key={index} className="h-auto outline-input grid grid-cols-8 py-2 mb-6">
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
                    <div className="py-20">
                        <div className="flex justify-center gap-10 swipper ">
                            {sponsorsImg.map((item, index) => (
                                <div className="w-24 h-24 " key={index}>
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.src}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <WhySubmitSection></WhySubmitSection>
                    <RegisterSectionWithVedio></RegisterSectionWithVedio>
                </div>
            </div>
        </>
    );
}
