import React from "react";
import { brand, heros } from "@/core/AssetsManager";
import BaseBtn from "../Base/BaseBtn";

export default function InterduceSection() {
    return (
        <>
            <div className="my-20 grid grid-cols-1 lg:grid-cols-5 lg:gap-20 gap-10">
                <div className="lg:col-span-2 aspect-[3/3.25] lg:aspect-[3/2.75] relative rounded-xl overflow-hidden">
                    <img
                        src={heros.dr_photo.src}
                        alt=""
                        className="w-full h-full object-cover object-top"
                    />
                    {/* <button className="play-btn w-16 h-16 text-4xl ps-2 text-primary bg-white rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <span className="mdi mdi-play-outline"></span>
                    </button> */}
                </div>
                <div className="lg:col-span-3">
                    <h2 className="section-title mb-5">
                        A Welcome Message from
                        <br />
                        the <span className="text-primary">EAOMS</span>{" "}
                        President
                    </h2>

                    <p className="text-justify text-muted mb-10 lg:pe-28 leading-7">
                        Dear Esteemed Colleagues It is with immense pride and
                        heartfelt joy that I welcome you to the 13th
                        International Conference of the Egyptian Association of
                        Oral & Maxillofacial Surgery (EAOMS), to be held from
                        the 1st to the 3rd of October 2025. This year’s event
                        holds special significance as we celebrate 25 years of
                        excellence in advancing Oral & Maxillofacial Surgery—a
                        milestone that . reflects our unwavering dedication to
                        innovation, education, and professional growth This
                        conference promises to be an extraordinary opportunity
                        for professionals seeking . advanced knowledge and
                        exposure in the ever-evolving field of Oral &
                        Maxillofacial Surgery We are privileged to host an
                        exceptional lineup of renowned international and
                        national experts who will share their wealth of
                        expertise and visionary insights on debatable issues,
                        inspiring us . all to reach new heights Your
                        participation is not just appreciated—it is invaluable.
                        My sincerest gratitude goes out to our distinguished
                        speakers, whose generosity in sharing their knowledge
                        ensures the success of this event. I am confident that
                        all attendees will leave with unforgettable memories,
                        enriched understanding, and a renewed passion for
                        excellence, all while enjoying the thoughtfully. curated
                        scientific sessions The organizing committee takes
                        immense pride in hosting this prestigious event and is
                        eager to welcome you to Egypt, the cradle of 7,000 years
                        of civilization. Here, where history and progress .
                        converge, we are reminded that our glorious past is the
                        foundation of our promising future As we celebrate this
                        silver jubilee of the Egyptian Association of Oral &
                        Maxillofacial Surgery, I would like to extend my deepest
                        gratitude to the dedicated volunteers and committee
                        members whose tireless efforts have brought this event
                        to life. Their commitment and passion are the . driving
                        forces behind this success Let us join together in
                        marking this historic occasion, fostering collaboration,
                        and embracing . the opportunities for growth and
                        discovery that lie ahead
                    </p>
                    <p className="font-bold text-end">
                        Prof. Abdelfattah Sadakah <br />
                        PhD., FDS, RCPS (Glasgow) <br />
                        President of EAOMS
                    </p>
                </div>
            </div>
        </>
    );
}
