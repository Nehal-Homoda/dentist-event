import React from 'react'

export default function SharedSearchInput() {
    const arr = ['mahmoud', 'ahmed', 'nehal', 'aml', 'ibrahim']
    return (
        <div>
            <div className='relative'>
                <input className='px-5 py-2 rounded-lg w-full text-sm focus:outline-none text-secondary-100 ' placeholder='search here' type="text" />
                <span className="text-xl mdi mdi-magnify absolute text-primary  right-2 top-1/2 -translate-y-1/2"></span>
                <div className=''>
                    {arr.map((item, index) => (<span>{item}</span>))}
                </div>

            </div>
        </div>
    )
}
