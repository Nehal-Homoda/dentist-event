import React from 'react'


type Props = {
    inputValue: string
    sendValueToParent: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchAction: () => void
}

export default function SharedSearchInput({ inputValue, sendValueToParent, searchAction }: Props) {
    return (
        <div>
            <div className='relative'>
                <input value={inputValue} onChange={sendValueToParent} className='px-5 py-2 rounded-lg w-full text-sm focus:outline-none text-secondary-100 ' placeholder='search here' type="text" />
                
                <button className='border-none text-xl absolute text-primary  right-2 top-1/2 -translate-y-1/2' onClick={searchAction}>

                <span  className="mdi mdi-magnify "></span>


                </button>


            </div>
        </div>
    )
}
