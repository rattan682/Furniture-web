"use client"

import React from 'react'
import Image from 'next/image'
import BreadCrumbs from '../_components/BreadCrumb'

function page() {
    return (
        <>
            <div className='bg-[#000063] text-white'>
                <h1 className='text-4xl py-10 text-center'>About Us</h1>
            </div>
            <div>
                <BreadCrumbs/>
            </div>
            <div className='lg:flex gap-x-28 my-8'>
                <div className='lg:w-1/2 py-5'>
                    <h1 className='sm:text-5xl text-3xl sm:leading-[60px] text-[#000063]'>Elegant Furniture Brand in Canada</h1>
                    <ul className='text-gray-600 text-sm sm:text-base'>
                        <li className='my-5'>At Mainland Furniture, we believe that your home is a reflection of your personal style, a sanctuary where comfort meets elegance. With a passion for craftsmanship and a commitment to quality, we curate collections that blend timeless design with modern sophistication.</li>
                        <li className='my-5'>Our journey began with a simple idea: to transform spaces with furniture that not only enhances aesthetics but also elevates everyday living. Each piece in our collection is thoughtfully selected to bring beauty, comfort, and functionality into your home.</li>
                        <li className='my-5'>We take pride in offering more than just furniture; we offer a lifestyle. Whether you’re furnishing a new home or reinventing your current space, Mainland Furniture is dedicated to helping you create a living environment that is as unique as you are.</li>
                        <li className='mt-5 mb-3'>Discover the art of fine living with Mainland Furniture, where every piece tells a story of elegance and style.</li>
                    </ul>
                </div>
                <div className='lg:w-1/2 py-5'>
                    <Image src='/images/about1.avif' className='rounded-3xl' alt='...' height={1000} width={1000} />
                </div>
            </div>
        </>
    )
}

export default page



