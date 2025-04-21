import BaseBtn from '@/components/Base/BaseBtn'
import FormCard from '@/components/Base/FormCard'
import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import SharedUploadPhoto from '@/components/shared/SharedUploadPhoto'
import { brand, icons } from '@/core/AssetsManager'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>

            <SharedHeader pageName="Register" />
            <div className="grid md:grid-cols-10 container py-20 ">
                <FormCard colNum="md:col-span-6 md:order-1 order-2" title='Registration for EAOMS Members' actionName='Send Now'>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <SharedUploadPhoto></SharedUploadPhoto>

                    </div>



                </FormCard>
                <div className="md:col-span-4 md:order-2 order-1 mx-auto my-auto ">
                    <div className="lg:w-72 lg:h-72 w-52 h-52">
                        <img className="w-full h-full object-contain" src={brand.logo_text.src} alt="" />
                    </div>
                </div>


            </div>
            <SharedCountDown />



        </div>
    )
}
