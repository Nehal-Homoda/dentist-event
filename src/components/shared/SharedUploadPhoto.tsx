'use client'
import React, { useState } from 'react'

export default function SharedUploadPhoto() {
    const [image, setImage] = useState(null);
    const [isImage, setIsImage] = useState(false)
    const showImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsImage(true)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }

    }
    return (
        <div className='w-20 h-20 relative '>
            <div className='relative bg-white w-full h-full rounded-full ring-1 ring-primary '>
                <input onChange={showImage} type="file" accept='image/*' id="uploadImage" className='absolute z-30  opacity-0  w-full h-full' />
                {isImage && <img src={image} alt="" className='w-full h-full object-contain' />}
                {!isImage && <span className="mdi mdi-account text-primary text-3xl z-1  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></span>}

                {!isImage ? <div className='cursor-pointer px-2  text-center bg-primary text-white  rounded-xl   absolute top-[80%] left-[80%] -translate-x-[50%] -translate-y-[50%]'>
                    <span className="mdi mdi-plus text-sm"></span>
                </div> : <div></div>}

            </div>

        </div>
    )
}
