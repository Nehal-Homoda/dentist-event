import React, { useState } from 'react'


type Props = {
    fileName: string
}
export default function SharedUploadFile({ fileName }: Props) {
    const [selectedImg, setSelectedImg] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState(null)

    const handleInputChange = (e) => {
        const file = e.target.files[0]
        const fileName = file.name
        const fileType = file.type

        if (fileType.includes('image') && file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedImg(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            setSelectedFileName(fileName)
        }

    }


    return (
        <div className=''>
            <div className=' text-primary '>
                <div className='cursor-pointer relative'>
                    <input onChange={handleInputChange} type="file" className='opacity-0 absolute w-full h-full' id="uploadInput" />
                    <span className='' >{fileName}</span>
                    <span className="mdi mdi-tray-arrow-up text-primary ms-2"></span>
                </div>

                <div>
                    <img src={selectedImg ? selectedImg : null} className='w-10 h-10 rounded-full' id="selectedImage" alt="" />
                </div>
                <span>{selectedFileName}</span>
            </div>

        </div>
    )
}
