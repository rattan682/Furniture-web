import React from 'react'

const Heading = ({ heading, subheading }) => {
  return (
    <div className='my-[100px] '>
      <h1 className='text-center text-2xl italic'>{heading}</h1>
      <h1 className='text-center font-bold text-5xl'>{subheading}</h1>
    </div>
  )
}

export default Heading