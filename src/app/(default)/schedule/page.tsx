'use client'


import BaseBtn from "@/components/Base/BaseBtn";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedDatePicker from "@/components/shared/SharedDatePicker";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedMenuDropDown from "@/components/shared/SharedMenuDropDown";
import { elements, heros } from "@/core/AssetsManager";
import { useState } from "react";



export default function page() {

    const x = [{ subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }]
    const arr = ['1', '2', '3', '4']
    const [selectedValueFromChild, setSelectedValueFromChild] = useState()
    const [selectedContent, setSelectedContent] = useState()
    const takeSelectedValue = (selectedItem) => {
        setSelectedValueFromChild(selectedItem)
        console.log('selected item in parent', selectedItem)
    }

    const takeSelectedContent = (item) => {
        setSelectedContent(item)
    }
    const takeSelectedDate = (item) => {

    }
    return <div>


        <SharedHeader pageName="Schedule" />
        <div className="container py-20">
            <div className="bg-primary grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 py-10 rounded-xl text-white mb-20 ">
                <div className="border-l-2 border-white  px-4 flex flex-col gap-5 ">
                    <p className="">Filter By Conference Day</p>
                    <div className="border-2 border-white rounded-xl px-3">
                        <SharedDatePicker  btnName="See All" sendSelectedValue={takeSelectedDate} />
                    </div>





                </div>
                <div className="border-l-2 border-primary-light-700 px-7  flex flex-col gap-5">
                    <p className="">Filter by Session Type</p>
                    <div className="border-2 border-white rounded-xl px-3">
                        <SharedMenuDropDown sendSelectedValue={takeSelectedValue} menuList={arr} btnName="See All" />

                    </div>

                </div>
                <div className="border-l-2 border-primary-light-700  px-7 flex flex-col gap-5 ">
                    <p className="">Filter by Content Tag</p>
                    <div className="border-2 border-white rounded-xl px-3">
                        <SharedMenuDropDown sendSelectedValue={takeSelectedContent} menuList={arr} btnName="See All" />

                    </div>
                </div>
                <div className="border-l-2 border-primary-light-700 px-4 flex flex-col gap-5">
                    <p>Search Speaker</p>
                </div>


            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                {x.map((item, index) => (<div key={index} style={{ backgroundImage: `url(${elements.schedule_bg.src})` }} className="text-lg flex flex-col justify-between bg-no-repeat bg-cover w-full sm:aspect-[3/3.8] aspect-square rounded-xl px-5 py-5 text-white">

                    <div>
                        <p>The Well-Rounded
                            Surgeon Leader</p>
                    </div>
                    <div>
                        <p className="mb-4 text-sm">Tue - 17 May - 03 :00 pm</p>
                        <BaseBtn minHeight="h-9">
                            <span>Details</span>
                        </BaseBtn>
                    </div>
                </div>))}
            </div>

            <SharedCountDown />


        </div>
    </div>;
}
