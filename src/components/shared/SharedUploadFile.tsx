import React, { useState } from 'react'


type Props = {
    fileName: string
}
export default function SharedUploadFile({ fileName }: Props) {
    const [selectedImg, setSelectedImg] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState(null)
    const openFile = () => {
        const input = document.getElementById('uploadInput')
        if (input) {
            input.click()
        }
    }

    const imageElm = document.getElementById('selectedImage')
    const fileInput = document.getElementById('uploadInput')
    if (fileInput) {
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0]
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
        })

    }
    return (
        <div className=''>
            <div className=' text-primary '>
                <input type="file" className='hidden' id="uploadInput" />
                <div className='cursor-pointer'>
                    <span className='' id="uploadFile" onClick={openFile}>{fileName}</span>
                    <span className="mdi mdi-tray-arrow-up text-primary ms-2"></span>
                </div>

                <div>
                    <img src={selectedImg ?selectedImg : null } className='w-10 h-10 rounded-full' id="selectedImage" alt="" />
                </div>
                <span>{selectedFileName}</span>
            </div>

        </div>
    )
}
