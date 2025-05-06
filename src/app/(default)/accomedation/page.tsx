'use client'

import BaseBtn from '@/components/Base/BaseBtn'
import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import { heros } from '@/core/AssetsManager'
import { getAccomedationService } from '@/services/appSharedServices'
import React, { useEffect, useState } from 'react'
import StaticSponsorsAnimatedSection from "@/components/static/SponsorsAnimatedSection";

export default function page() {


    const hotels = [
        { id: 1, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },
        { id: 2, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },
        { id: 3, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },

    ]


    const [accomedation, setAccomedation] = useState([])

    const getAccomedationHotels = async () => {
        getAccomedationService().then((response) => {
            setAccomedation(response)

        })

    }

    useEffect(() => {
        getAccomedationHotels()
    }, [])
    return (
        <div>
            <SharedHeader pageName='Accomedation' />
            <div className='container py-20'>
                <div className=''>
                    {accomedation.map((item, index) => (
                        <div key={index} className='grid md:grid-cols-2 gap-10 py-6'>
                            <div className={` w-full h-full rounded-2xl overflow-hidden ${index % 2 == 0 ? 'md:order-1' : 'md:order-2 '} `}>
                                <img className='w-full h-full object-cover' src={item.accommodationImages[0].image} alt="" />
                            </div>
                            <div className={`pt-5 ${index % 2 == 0 ? 'md:order-2' : 'md:order-1 '}`}>

                                <h2 className='font-bold mb-5'>{item.name}</h2>
                                <p className='text-secondary-100 mb-5'>{item.description} </p>
                                <div className='grid grid-cols-2 gap-y-16'>
                                    <div className="border-l-2 border-primary-light-600 px-3">
                                        <p className='text-primary mb-5'>{item.location}</p>
                                        <p>City</p>
                                    </div>
                                    <div className='border-l-2 border-primary-light-600 px-3'>
                                        <p className='text-primary mb-5'>{item.price}</p>
                                        <p>Price</p>
                                    </div>
                                    <div className="border-l-2 border-primary-light-600 px-3 ">
                                        <p className='text-primary mb-5'>{item.distance}</p>
                                        <p>Distance</p>
                                    </div>
                                    <div className='border-l-2 border-primary-light-600 px-3'>
                                        <p className='text-primary mb-5'>{item.starts} Star</p>
                                        <p>Service</p>
                                    </div>

                                </div>

                                <div className='mt-12'>
                                    <BaseBtn>
                                        <span>Book Now</span>
                                    </BaseBtn>
                                </div>



                            </div>

                        </div>
                    ))}
                </div>

                <SharedCountDown />
                <StaticSponsorsAnimatedSection />


            </div>

        </div>
    )
}
