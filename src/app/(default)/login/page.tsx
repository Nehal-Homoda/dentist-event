import BaseBtn from '@/components/Base/BaseBtn'
import SharedCountDown from '@/components/shared/SharedCountDown'
import SharedHeader from '@/components/shared/SharedHeader'
import { brand, icons } from '@/core/AssetsManager'
import Link from 'next/link'
import React from 'react'

export default function loginpage() {
    return (
        <div>
            <SharedHeader pageName="Login" />
            <div className="grid md:grid-cols-10 container py-20 ">
                <div className="md:col-span-6 md:order-1 order-2 form bg-primary-light-800 px-5 py-7 rounded-2xl">
                    <h2 className="mb-5 text-primary text-2xl">Sign-In</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input className="outline-input" type="text" placeholder="enter usename" />
                        <input className="outline-input" type="text" placeholder="enter usename" />
                    </div>
                    <div className="text-center mb-5">
                        <p className="text-primary mb-4">Or sign in with</p>
                        <div className="w-10 h-10 mx-auto mb-2">
                            <img className="w-full h-full object-contain" src={icons.google_icon.src} alt="" />
                        </div>
                        <h2 className="text-primary ">Don't have account ?</h2>
                        <Link className="underline" href="">Create your account</Link>
                    </div>
                    <BaseBtn minWidth="w-40">
                        <span>Sign In</span>
                    </BaseBtn>
                </div>
                <div className="md:col-span-4 md:order-2 order-1 mx-auto my-auto ">
                    <div className="lg:w-72 lg:h-72 w-52 h-52">
                        <img className="w-full h-full object-contain" src={brand.logo_text.src} alt="" />
                    </div>
                </div>


            </div>
            <SharedCountDown/>
        </div>
    )
}
