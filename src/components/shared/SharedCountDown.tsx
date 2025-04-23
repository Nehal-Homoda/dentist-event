"use client";
import { elements } from "@/core/AssetsManager";
import React, { useEffect, useState } from "react";

export default function () {
    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");

    const [isEventOver, setIsEventOver] = useState(false);

    // const countDown = () => {
    //     const endsAt = "2025-06-03";
    //     const endsAtTime = new Date(endsAt).getTime();
    //     const currentLocalDate = new Date().toLocaleString("en-US", {
    //         timeZone: "Asia/Dubai",
    //     });
    //     const currentTime = new Date(currentLocalDate).getTime();
    //     const distance = endsAtTime - currentTime;
    //     let d, h, m, s;

    //     d = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    //     h = Math.floor(
    //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //     ).toString();
    //     m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    //     s = Math.floor((distance % (1000 * 60)) / 1000).toString();

    //     // d = d <= 0 ? 0 : d;
    //     // h = h <= 0 ? 0 : h;
    //     // m = m <= 0 ? 0 : m;
    //     // s = s <= 0 ? 0 : s;

    //     // d = d < 10 ? "0" + d : d;
    //     // h = h < 10 ? "0" + h : h;
    //     // m = m < 10 ? "0" + m : m;
    //     // s = s < 10 ? "0" + s : s;

    //     setDay(d);
    //     setHour(h);
    //     setMinute(m);
    //     setSecond(s);
    // };

    const countDownTimerBySeconds = (seconds: any) => {
        if (!seconds)
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };

        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;

        let d: any = days < 0 ? 0 : days;
        let h: any = hours < 0 ? 0 : hours;
        let m: any = minutes < 0 ? 0 : minutes;
        let s: any = remainingSeconds < 0 ? 0 : remainingSeconds;

        d = d < 10 ? "0" + d : d;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        return {
            days: d.toString(),
            hours: h.toString(),
            minutes: m.toString(),
            seconds: s.toString(),
        };
    };
    const countDownBySeconds = () => {
        const endDate = new Date("2025-10-1");
        const currentDate = new Date();

        const diffInSeconds = Math.floor(
            (endDate.getTime() - currentDate.getTime()) / 1000
        );
        const { days, hours, minutes, seconds } =
            countDownTimerBySeconds(diffInSeconds);
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
        if (endDate.getDate() <= 0) {
            setIsEventOver(true);
            return;
        }
        setIsEventOver(false);
    };
    useEffect(() => {
        countDownBySeconds();
        const intervalId = setInterval(() => {
            countDownBySeconds();
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container  pt-20">
            <div className="card-title text-center mb-16">
                <h2 className="section-title uppercase">THE COUNTDOWN</h2>
            </div>

            <div className="flex justify-center mx-auto  mb-5   lg:gap-4 md:gap-2 gap-1">
                <div className="timer-days flex flex-col items-center gap-4">
                    <div className="flex lg:gap-4 gap-2">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {day.slice(0, 1)}
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {day.slice(1)}
                            </span>
                        </div>
                    </div>
                    <span>Days</span>
                </div>
                <span className="text-3xl mt-6  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-hours flex flex-col items-center gap-4">
                    <div className="flex lg:gap-4 gap-2">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {hour.slice(0, 1)}
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {hour.slice(1)}
                            </span>
                        </div>
                    </div>
                    <span>Hours</span>
                </div>
                <span className="text-3xl mt-6  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-minutes flex flex-col items-center gap-4">
                    <div className="flex lg:gap-4 gap-2">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {minute.slice(0, 1)}
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {minute.slice(1)}
                            </span>
                        </div>
                    </div>
                    <span>Minutes</span>
                </div>
                <span className="text-3xl mt-6  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-minutes flex flex-col items-center gap-4">
                    <div className="flex lg:gap-4 gap-2">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {second.slice(0, 1)}
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                {second.slice(1)}
                            </span>
                        </div>
                    </div>
                    <span>Seconds</span>
                </div>
            </div>

            <div className="mx-auto w-[80%] max-w-[600px]  ">
                <img
                    className="w-full object-contain"
                    src={elements.logo_year_clear.src}
                    alt=""
                />
            </div>
        </div>
    );
}
