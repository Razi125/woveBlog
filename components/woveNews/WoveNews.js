import React from 'react'

const WoveNews = () => {
  return (
    <div className='mx-auto container mb-[12px] '>
      <div className='flex justify-center items-center'>
        <div className='relative'>
          <img className='w-[92%]  md:h-[28rem]' src='/images/NewsBg.svg' alt='' />
        </div>
        <div className='absolute'>
          <h1 className='max-w-[582px] text-[#FFFFFF] text-3xl md:text-5xl leading-[135%] font-bold not-italic -tracking-[0.01] montserrat'>Latest News inside <span className=' text-transparent flex text-center justify-center items-center  bg-clip-text bg-gradient-to-r from-[#0585F2] to-[#A1FCE8]'>Wove</span></h1>
        </div>
      </div>

    </div>
  )
}

export default WoveNews
