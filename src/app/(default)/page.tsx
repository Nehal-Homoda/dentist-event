import WhySubmitSection from "@/components/static/WhySubmitSection";

export default function Home() {
    return (
        <>
            <div className="home-page">
                <div className="w-full aspect-[1.5/1] bg-[url('@/assets/images/bg/header.png')] bg-no-repeat bg-cover bg-top"></div>

                <div className="container">
                    <WhySubmitSection></WhySubmitSection>
                </div>
            </div>
        </>
    );
}
