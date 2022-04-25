import React from 'react'

const Header = () => {
  return (
    <div className='mx-auto container'>
        <div className='flex justify-center lg:justify-between  '>
            <div className='mt-16'>
                <img src='/images/wove-logo.svg' alt=''/>
            </div>
            <div className='flex space-x-[36px] mt-[76px]'>
                <p className='max-w-[49px] hidden lg:block text-[#FFFFFF] text-base leading-4 not-italic font-normal avenir'>
                Pricing
                </p>
                <p className='max-w-[49px] hidden lg:block text-[#FFFFFF] text-base leading-4 not-italic font-extrabold avenir'>
                Blog
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Header
