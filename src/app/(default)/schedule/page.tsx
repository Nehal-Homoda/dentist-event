"use client";

import BaseBtn from "@/components/Base/BaseBtn";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedDatePicker from "@/components/shared/SharedDatePicker";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedMenuDropDown from "@/components/shared/SharedMenuDropDown";
import SharedSearchInput from "@/components/shared/SharedSearchInput";
import { elements } from "@/core/AssetsManager";
import { useState } from "react";
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";
import { useRouter } from "next/navigation";

export default function page() {
    const x = [
        {
            subject: "The Well-Rounded Surgeon Leader",
            date: "Tue - 17 May - 03 :00 pm",
        },
        {
            subject: "The Well-Rounded Surgeon Leader",
            date: "Tue - 17 May - 03 :00 pm",
        },
        {
            subject: "The Well-Rounded Surgeon Leader",
            date: "Tue - 17 May - 03 :00 pm",
        },
        {
            subject: "The Well-Rounded Surgeon Leader",
            date: "Tue - 17 May - 03 :00 pm",
        },
    ];
    const arr = ["1", "2", "3", "4"];
    const [selectedValueFromChild, setSelectedValueFromChild] = useState();
    const router = useRouter();

    const [selectedContent, setSelectedContent] = useState();
    const [searchValue, setSearchValue] = useState("");

    const takeSelectedValue = (selectedItem: any) => {
        setSelectedValueFromChild(selectedItem);
        console.log("selected item in parent", selectedItem);
    };

    const takeSelectedContent = (item: any) => {
        setSelectedContent(item);
    };
    const takeSelectedDate = (item: any) => {};
    const takeSearchValue = (e: any) => {
        setSearchValue(e.target.value);
    };

    const openScheduleHandler = (id: number) => {
        router.push(`/schedule/${id}`);
    };

    return (
        <div>
            <SharedHeader pageName="Schedule" />
            <div className="container py-20">
                <div className="bg-primary grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 py-10 rounded-xl text-white mb-20 ">
                    <div className="border-l-2 border-white  px-4 flex flex-col gap-5 ">
                        <p className="">Filter By Conference Day</p>
                        <div className="border-2 border-white rounded-xl px-3">
                            <SharedDatePicker
                                btnName="See All"
                                sendSelectedValue={takeSelectedDate}
                            />
                        </div>
                    </div>
                    <div className="border-l-2 border-primary-light-700 px-7  flex flex-col gap-5">
                        <p className="">Filter by Session Type</p>
                        <div className="border-2 border-white rounded-xl px-3">
                            <SharedMenuDropDown
                                sendSelectedValue={takeSelectedValue}
                                menuList={arr}
                                btnName="See All"
                            />
                        </div>
                    </div>
                    <div className="border-l-2 border-primary-light-700  px-7 flex flex-col gap-5 ">
                        <p className="">Filter by Content Tag</p>
                        <div className="border-2 border-white rounded-xl px-3">
                            <SharedMenuDropDown
                                sendSelectedValue={takeSelectedContent}
                                menuList={arr}
                                btnName="See All"
                            />
                        </div>
                    </div>
                    <div className="border-l-2 border-primary-light-700 px-4 flex flex-col gap-5">
                        <p>Search Speaker</p>

                        <SharedSearchInput
                        searchAction={() => {}}
                            inputValue={searchValue}
                            sendValueToParent={takeSearchValue}
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                    {x.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${elements.schedule_bg.src})`,
                            }}
                            className="text-lg flex flex-col justify-between bg-no-repeat bg-cover w-full sm:aspect-[3/3.8] aspect-square rounded-xl px-5 py-5 text-white"
                        >
                            <div>
                                <p>The Well-Rounded Surgeon Leader</p>
                            </div>
                            <div>
                                <p className="mb-4 text-sm">
                                    Tue - 17 May - 03 :00 pm
                                </p>
                                <BaseBtn
                                    handleBtnAction={() =>
                                        openScheduleHandler(1)
                                    }
                                    minHeight="h-9"
                                >
                                    <span>Details</span>
                                </BaseBtn>
                            </div>
                        </div>
                    ))}
                </div>

                <SharedCountDown />
                <StaticSponsorsAnimatedSection />
            </div>
        </div>
    );
}
