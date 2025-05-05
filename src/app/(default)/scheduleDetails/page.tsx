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
                        <div className='grid grid-cols-3 py-10'>
                            <div className='bg-white px-3 py-2'>
                                <span className='text-primary text-lg'>Date:</span>
                                <span className='text-secondary-300 text-sm ps-2'> Tue - 17 May </span>
                            </div>
                            <div className='bg-white px-3 py-2'>
                                <span className='text-primary text-lg'>Time:</span>
                                <span className='text-secondary-300 text-sm ps-2'>10:30 AM - 12:00 PM</span>
                            </div>
                            <div className='bg-white px-3 py-2'>
                                <span className='text-primary text-lg'>Location:</span>
                                <span className='text-secondary-300 text-sm ps-2'>Egypt , Cairo </span>
                            </div>

                        </div>
                        <div className='mb-6'>
                            <h2 className='text-primary text-2xl mb-6'>Moderators</h2>
                            <span className='text-secondary-100'>Dr.Ahmed ehab</span>
                        </div>
                        <div>
                            <h2 className='text-primary text-2xl mb-6'>Speakers</h2>
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
