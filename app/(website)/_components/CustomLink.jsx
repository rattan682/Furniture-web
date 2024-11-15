import Link from 'next/link'
import React from 'react'

const CustomLink = ({linktext,link}) => {
  return (
    <>
    <Link href={link} className='flex hover:bg-white hover:text-orange-800 justify-center items-center text-white p-3 border-2 border-white'>{linktext}</Link>
    </>
  )
}
export default CustomLink