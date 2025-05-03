import BaseBtn from '@/components/Base/BaseBtn'
import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import { heros } from '@/core/AssetsManager'
import React from 'react'

export default function page() {


    const hotels = [
        { id: 1, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },
        { id: 2, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },
        { id: 3, image: heros.hotel_img.src, title: 'Head Title', subtitle: "Lorem Ipsum  is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", location: 'Cairo', service: '5 Star', price: '$250', distance: '27 M' },

    ]
    return (
        <div>
            <SharedHeader pageName='Accomedation' />
            <div className='container py-20'>
                <div className=''>
                    {hotels.map((item, index) => (
                        <div key={index} className='grid md:grid-cols-2 gap-10 py-6'>
                            <div className={` w-full h-full rounded-2xl overflow-hidden ${index % 2 == 0 ? 'md:order-1' : 'md:order-2 '} `}>
                                <img className='w-full h-full object-cover' src={heros.hotel_img.src} alt="" />
                            </div>
                            <div className={`pt-5 ${index % 2 == 0 ? 'md:order-2' : 'md:order-1 '}`}>

                                <h2 className='font-bold mb-5'>Head Title</h2>
                                <p className='text-secondary-100 mb-5'>Lorem   Ipsum  is    simply    dummy   text  of  the    printing and  typesetting  industry . Lorem  Ipsum   has  been  the   industry's  standard dummy text ever since the  1500s </p>
                                <div className='grid grid-cols-2 gap-y-16'>
                                    <div className="border-l-2 border-primary-light-600 px-3">
                                        <p className='text-primary mb-5'>Cairo</p>
                                        <p>City</p>
                                    </div>
                                    <div className='border-l-2 border-primary-light-600 px-3'>
                                        <p className='text-primary mb-5'>5 Star</p>
                                        <p>Service</p>
                                    </div>
                                    <div className="border-l-2 border-primary-light-600 px-3 ">
                                        <p className='text-primary mb-5'>Cairo</p>
                                        <p>City</p>
                                    </div>
                                    <div className='border-l-2 border-primary-light-600 px-3'>
                                        <p className='text-primary mb-5'>5 Star</p>
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

                <SharedCountDown/>


            </div>

        </div>
    )
}
