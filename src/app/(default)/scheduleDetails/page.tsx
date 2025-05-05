'use client'
import FormCard from '@/components/Base/FormCard'
import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import { heros } from '@/core/AssetsManager'
import React from 'react'

export default function page() {
    return (
        <div>
            <SharedHeader pageName='Schedule' />

            <div className='container py-20'>




                <div className="grid md:grid-cols-10 container py-20 ">
                    <FormCard
                        isBackBtn={true}
                        colNum="md:col-span-6 md:order-1 order-2"
                        title="The Well-RoundedSurgeon Leader"
                        actionName=""
                    >
                        <p className='font-bold mb-3 '>Nextgen Symposium</p>
                        <span className='text-secondary-200'>Leadership</span>
                        <div className='grid grid-cols-3 py-10 gap-4'>
                            <div className='bg-white px-3 py-2 rounded-xl'>
                                <span className='text-primary text-lg'>Date:</span>
                                <span className='text-secondary-300 text-xs ps-2'> Tue - 17 May </span>
                            </div>
                            <div className='bg-white px-3 py-2 rounded-xl'>
                                <span className='text-primary text-lg'>Time:</span>
                                <span className='text-secondary-300 text-xs ps-2'>10:30 AM - 12:00 PM</span>
                            </div>
                            <div className='bg-white px-3 py-2 rounded-xl'>
                                <span className='text-primary text-lg'>Location:</span>
                                <span className='text-secondary-300 text-xs ps-2'>Egypt , Cairo </span>
                            </div>

                        </div>
                        <div className='mb-6'>
                            <h2 className='text-primary text-2xl mb-6'>Moderators</h2>
                            <span className='text-secondary-100'>Dr.Ahmed ehab</span>
                        </div>
                        <div className='mb-6'>
                            <h2 className='text-primary text-2xl mb-6'>Speakers</h2>



                            <div className='flex items-center h-full gap-8 bg-white mb-5'>
                                <div className='w-24 h-24'>
                                    <img className='w-full h-full object-contain' src={heros.speaker_1.src} alt="" />
                                </div>

                                <div className='w-full h-full  border-l-2 border-primary px-5'>
                                    <h2 className='mb-5'>Dr.Ahmed ehab</h2>
                                    <span className='text-secondary-200'>Head of the Department of Oral and Dental Surgery</span>
                                </div>

                            </div>
                            <div className='flex items-center h-full gap-8 bg-white'>
                                <div className='w-24 h-24'>
                                    <img className='w-full h-full object-contain' src={heros.speaker_1.src} alt="" />
                                </div>

                                <div className='w-full h-full  border-l-2 border-primary px-5'>
                                    <h2 className='mb-5'>Dr.Ahmed ehab</h2>
                                    <span className='text-secondary-200'>Head of the Department of Oral and Dental Surgery</span>
                                </div>

                            </div>
                        </div>

                    </FormCard>
                    <div className=" hidden md:block md:col-span-4  md:order-2 order-1 mx-auto mt-24  ">
                        <div className="w-full aspect-[3/3.5] ">
                            <img
                                className="w-full h-full object-cover rounded-r-2xl"
                                src={heros.schedule_details_img.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>


                <SharedCountDown />
            </div>
        </div>
    )
}
