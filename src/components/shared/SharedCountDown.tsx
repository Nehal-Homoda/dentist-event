import React from "react";

export default function () {
    return (
        <div className="container py-20">
            <div className="card-title text-center mb-16">
                <h1 className="lg:text-4xl text-2xl font-medium mb-4">
                    THE COUNTDOWN
                </h1>
            </div>

            <div className="flex justify-center   gap-3">
                <div className="timer-days flex flex-col items-center gap-4">
                    <div className="flex gap-3">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                62
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                45
                            </span>
                        </div>
                    </div>
                    <span>Days</span>
                </div>
                <span className="text-3xl mt-4  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-hours flex flex-col items-center gap-4">
                    <div className="flex gap-3">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                43
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                45
                            </span>
                        </div>
                    </div>
                    <span>Hours</span>
                </div>
                <span className="text-3xl mt-4  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-minutes flex flex-col items-center gap-4">
                    <div className="flex gap-3">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                34
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                45
                            </span>
                        </div>
                    </div>
                    <span>Minutes</span>
                </div>
                <span className="text-3xl mt-4  text-primary font-bold">
                    &#x3a;
                </span>

                <div className="timer-minutes flex flex-col items-center gap-4">
                    <div className="flex gap-3">
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                45
                            </span>
                        </div>
                        <div className="countDown-item ">
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                45
                            </span>
                        </div>
                    </div>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );
}
