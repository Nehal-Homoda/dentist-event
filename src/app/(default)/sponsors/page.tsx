import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import { elements, heros } from '@/core/AssetsManager'
import React from 'react'

export default function page() {

    const arr = [elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src, elements.sponsor1.src]
    return (
        <div>
            <SharedHeader pageName='Sponsors' />
            <div className='container py-20'>
                <h2 className='text-xl font-bold text-center mb-16'>Join the 150+ companies trusting maxline company</h2>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 '>
                    {arr.map((item, index) => (<div key={index} className='flex items-center justify-center px-4 py-5 bg-primary-light-800 rounded-xl border border-primary-light-400 '>
                        <div className='w-44 h-44 '>
                            <img className='w-full h-full object-contain' src={item} alt="" />
                        </div>
                    </div>))}

                </div>

                <SharedCountDown />
            </div>

        </div>
    )
}
