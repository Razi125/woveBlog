import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='mx-auto container max-w-[470px] xl:max-w-[730px] my-32'>
            <div style={{ border: '1px solid #FFFFFF' }}></div>
            </div>
        
            <div className='mx-auto md:px-6 container'>
                <div style={{ border: '1px solid #262626' }}></div>
                <div className='flex flex-col md:flex-row justify-between items-center mt-6 mb-6 xl:mt-8 xl:mb-8 '>
                    <div className=' mb-[25.35px] md:mb-0 md:py-0'>
                        <img className='md:w-[121.18px] xl:w-[201.96px] ' src='./images/wove-logo.svg' alt='' />
                    </div>
                    <div className='flex gap-4 justify-center items-center '>
                        <img className='md:w-[20px] xl:w-[32px] ' src='./images/twitter.svg' alt='' />
                        <img className='md:w-[20px] xl:w-[32px]' src='./images/linked_in.svg' alt='' />
                        <img className='md:w-[20px] xl:w-[32px]' src='./images/spotify.svg' alt='' />
                        <img className='md:w-[20px] xl:w-[32px]' src='./images/gmail.svg' alt='' />
                    </div>
                </div>
                <div style={{ border: '1px solid #262626' }}></div>
                <div className='flex flex-col justify-center items-center mt-6 xl:mt-8'>
                    <p className=' text-sm mx-w-[343px] md:mx-w-[232px] pb-6 md:pb-4 xl:pb-4 leading-3 text-[#A3A3A3] avenir font-[350] not-italic '>Privacy Policy | Terms and Conditions</p>
                    <h1 className='text-[#FFFFFF] text-base tracking-tighter-[-0.01em] leading-4 avenir mx-w-[343px] pb-8 font-normal not-italic'>@ 2022 Wove Labs, Inc, All rights reserved.</h1>
                </div>
            </div>
        </>
    )
}

export default Footer
