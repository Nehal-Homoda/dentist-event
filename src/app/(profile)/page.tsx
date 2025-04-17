import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import SharedCountDown from "@/components/shared/SharedCountDown";
import InterduceSection from "@/components/static/InterduceSection";
import RegisterSectionWithVedio from "@/components/static/RegisterSectionWithVedio";
import WhySubmitSection from "@/components/static/WhySubmitSection";
import { heros } from "@/core/AssetsManager";

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
    return (
        <>
            <div className="home-page">
                <div className="w-full aspect-[1.5/1] bg-[url('@/assets/images/bg/header.png')] bg-no-repeat bg-cover bg-top"></div>

                <div className="container">
                    <InterduceSection></InterduceSection>
                    <SharedCountDown/>
                    <div className="py-20">
                        <h1 className="text-2xl text-center mb-16 ">
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
                    <WhySubmitSection></WhySubmitSection>
                    <RegisterSectionWithVedio></RegisterSectionWithVedio>
                </div>
            </div>
        </>
    );
}
