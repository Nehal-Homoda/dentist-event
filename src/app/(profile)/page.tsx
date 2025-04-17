import SharedCardWithShadow from "@/components/shared/SharedCardWithShadow";
import InterduceSection from "@/components/static/InterduceSection";
import RegisterSectionWithVedio from "@/components/static/RegisterSectionWithVedio";
import WhySubmitSection from "@/components/static/WhySubmitSection";

export default function Home() {

    const courses=[{image:''}]
    return (
        <>
            <div className="home-page">
                <div className="w-full aspect-[1.5/1] bg-[url('@/assets/images/bg/header.png')] bg-no-repeat bg-cover bg-top"></div>

                <div className="container">
                    <InterduceSection></InterduceSection>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container gap-10 mt-10">
                        <SharedCardWithShadow />
                        <SharedCardWithShadow />
                        <SharedCardWithShadow />
                    </div>
                    <WhySubmitSection></WhySubmitSection>
                    <RegisterSectionWithVedio></RegisterSectionWithVedio>
                </div>
            </div>
        </>
    );
}
