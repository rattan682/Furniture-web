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
                <div className='lg:w-1/2 sm:rounded-3xl overflow-hidden lg:order-2 order-1'>
                    <Image src='/images/about1.avif' className='sm:rounded-3xl sm:hover:scale-[1.2] object-cover pb-0' alt='...' height={1200} width={1200} />
                </div>
                <div className='lg:w-1/2 lg:pe-4 lg:order-1 lg:mt-0 mt-5 order-2'>
                    <h1 className='sm:text-5xl text-3xl sm:leading-[60px] text-[#000063]'>Bringing Style and Comfort to Your Home</h1>
                    <ul className='text-gray-600 text-sm sm:text-base'>
                        <li className='my-5'>At Mainland Furniture, we are passionate about crafting elegant, timeless furniture that transforms houses into homes. Based in Canada, we believe your living space should reflect your personal style while offering comfort and functionality.</li>
                        <li className='my-5'>Every piece in our collection is thoughtfully designed to blend sophistication with everyday practicality, helping you create a space that feels uniquely yours. Whether you're furnishing a new home or refreshing your current one, Mainland Furniture is here to inspire and elevate your living experience</li>
                        <li className='my-5'>Discover the art of fine living with Mainland Furniture—where style meets quality.</li>
                    </ul>
                </div>
            </div>
            <div className='sm:my-16 my-6 lg:flex gap-20'>
                <div className='content-center lg:w-1/2 lg:order-2 order-1'>
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
                <div className='bg-slate-400 lg:w-1/2 lg:mt-0 mt-3 lg:order-1 order-2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41836.954205030706!2d-122.321221!3d49.052243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484354495b9281f%3A0x1302a0ef2b793a93!2s2754%20Garden%20St%20Unit%202%2C%20Abbotsford%2C%20BC%20V2T%203R5%2C%20Canada!5e0!3m2!1sen!2sus!4v1731672313647!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} loading="lazy"></iframe>
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default page



