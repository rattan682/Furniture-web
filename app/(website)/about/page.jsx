"use client"

import React from 'react'
import Image from 'next/image'
import BreadCrumbs from '../_components/BreadCrumb'

function page() {
    return (
        <>
            <div className='bg-[#000063] text-white'>
                <h1 className='sm:text-4xl text-2xl sm:py-10 py-5 text-center'>About Us</h1>
            </div>
            <div>
                <BreadCrumbs />
            </div>
            <div className='lg:flex gap-x-20 sm:my-16 my-6'>
                <div className='lg:w-1/2 lg:pe-4'>
                    <h1 className='sm:text-5xl text-3xl sm:leading-[60px] text-[#000063]'>Elegant Furniture Brand in Canada</h1>
                    <ul className='text-gray-600 text-sm sm:text-base'>
                        <li className='my-5'>At Mainland Furniture, we believe that your home is a reflection of your personal style, a sanctuary where comfort meets elegance. With a passion for craftsmanship and a commitment to quality, we curate collections that blend timeless design with modern sophistication.</li>
                        <li className='my-5'>Our journey began with a simple idea: to transform spaces with furniture that not only enhances aesthetics but also elevates everyday living. Each piece in our collection is thoughtfully selected to bring beauty, comfort, and functionality into your home.</li>
                        <li className='my-5'>We take pride in offering more than just furniture; we offer a lifestyle. Whether you’re furnishing a new home or reinventing your current space, Mainland Furniture is dedicated to helping you create a living environment that is as unique as you are.</li>
                        <li className='mt-5 lg:mb-0 mb-3'>Discover the art of fine living with Mainland Furniture, where every piece tells a story of elegance and style.</li>
                    </ul>
                </div>
                <div className='lg:w-1/2 overflow-hidden'>
                    <Image src='/images/about1.avif' className='sm:rounded-3xl sm:hover:scale-[1.2] object-cover pb-0' alt='...' height={1200} width={1200} />
                </div>
            </div>
            <div className='sm:my-16 my-6 lg:flex gap-20'>
                <div className='content-center lg:w-1/2'>
                    <h1 className='sm:text-5xl text-3xl text-[#000063]'>Mainland Furniture</h1>
                    <p className='text-gray-600 sm:my-4 mt-2 mb-4 sm:text-base text-sm'>Based in Canada, providing elegant furniture products.</p>
                    <div>
                        <div>
                            <h4 className='font-semibold text-gray-800'>Location</h4>
                            <p className='text-gray-600 sm:text-base text-sm my-2'>Unit 2 2754 Garden St., Abbotsford, BC V2T 3R5</p>
                        </div>
                        <div className='my-4 text-gray-600'>
                            <h4 className='font-semibold text-gray-800'>Hours</h4>
                            <p className='my-2 sm:text-base text-sm'>Monday - Saturday  11am - 7pm</p>
                            <p className='sm:text-base text-sm'>Sunday 11am - 6pm</p>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-400 lg:w-1/2 lg:mt-0 mt-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41836.954205030706!2d-122.321221!3d49.052243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484354495b9281f%3A0x1302a0ef2b793a93!2s2754%20Garden%20St%20Unit%202%2C%20Abbotsford%2C%20BC%20V2T%203R5%2C%20Canada!5e0!3m2!1sen!2sus!4v1731672313647!5m2!1sen!2sus" width="100%" height="400" style={{border: 0}} loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default page



