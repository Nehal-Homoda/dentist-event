import BaseBtn from "@/components/Base/BaseBtn";
import SharedCountDown from "@/components/shared/SharedCountDown";
import SharedHeader from "@/components/shared/SharedHeader";
import SharedMenuDropDown from "@/components/shared/SharedMenuDropDown";
import { elements, heros } from "@/core/AssetsManager";





export default function page() {

    const x = [{ subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }, { subject: 'The Well-Rounded Surgeon Leader', date: 'Tue - 17 May - 03 :00 pm' }]
    const arr = ['1', '2', '3', '4']

    return <div>


        <SharedHeader pageName="Schedule" />
        <div className="container py-20">
            <div className="bg-primary grid grid-cols-4 px-10 py-10 rounded-xl text-white mb-20 ">
                <div className="border-l-2 border-white  px-4">
                    <p>Filter By Conference Day</p>




                </div>
                <div className="border-l-2 border-primary-light-700 px-7 ">
                    <p className="mb-4">Filter by Session Type</p>
                    <SharedMenuDropDown menuList={arr} btnName="See All" />

                </div>
                <div className="border-l-2 border-primary-light-700  px-7">
                    <p className="mb-4">Filter by Content Tag</p>
                    <SharedMenuDropDown menuList={arr} btnName="See All" />
                </div>
                <div className="border-l-2 border-primary-light-700 px-4">
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
