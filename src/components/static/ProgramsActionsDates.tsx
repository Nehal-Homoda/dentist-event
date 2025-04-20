import React from "react";

export default function ProgramsActionsDates() {

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
                                    <h1 className="">{item.date}</h1>
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
    );
}
