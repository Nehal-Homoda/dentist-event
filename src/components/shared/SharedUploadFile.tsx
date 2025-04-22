import React from 'react'


type Props = {
    fileName: string
}
export default function SharedUploadFile({ fileName }: Props) {
    const openFile = () => {
        const input = document.getElementById('uploadInput')
        if (input) {
            input.click()
        }
    }
    return (
        <div className=''>
            <div className=' text-primary '>
                <input type="file" className='hidden' id="uploadInput" />
                <div className='cursor-pointer'>
                    <span className='' id="uploadFile" onClick={openFile}>{fileName}</span>
                    <span className="mdi mdi-tray-arrow-up text-primary ms-2"></span>
                </div>
            </div>

        </div>
    )
}
