import React from 'react'

const data = [
    {
        url: '/images/pic1.svg',
        date: '. JAN 16, 2022',
        title: '6 Ways To Increase Website Traffic',
        parah: 'And one fine day, you decided to show up digitally, you have a website for your business.'
    },
    {
        url: '/images/pic2.svg',
        date: '. JAN 23, 2022',
        title: 'How to Load 100 Billion Rows of Data Ultrafast',
        parah: 'Its no secret that loading data into a database can be an arduous, time-consuming process.'
    },
    {
        url: '/images/pic3.svg',
        date: '. MAR 23, 2022',
        title: 'Are My Applications Data Intensive?',
        parah: 'SingleStore is a hybrid relational database geared toward data-intensive applications that runs on-prem, or in a private or public cloud.'
    },
    {
        url: '/images/pic4.svg',
        date: '. APR 19, 2022',
        title: 'Growth and Compliance in the Transport Industry',
        parah: 'The transport industry is a growing industry which had a lot of changes in the last couple of years in relation to compliance and technical innovations.'
    },
    {
        url: '/images/pic5.svg',
        date: '. SEP 12, 2021',
        title: 'Improving User Experience ',
        parah: 'At Salesforce, we strive to balance the security of your data and apps with an efficient and enjoyable user experience.'
    },
    {
        url: '/images/pic6.svg',
        date: '. AUG 23, 2021',
        title: 'How I Mastered the Art of Confidence',
        parah: 'A short story of how neuroscience helped me build the confidence to achieve my goals — and how it can help you too.'
    },
]

const dataMobile = [
    {
        url: '/images/pic11.svg',
        date: '. AUG 23, 2021 ',
        title: 'How I Mastered the Art of Confidence',
        parah: 'A short story of how neuroscience helped me build the confidence to achieve my goals — and how it can help you too.'
    },
    {
        url: '/images/pic12.svg',
        date: '. FEB 23, 2022 ',
        title: 'Five Factors of Cloud Database Leaders',
        parah: 'If you havent noticed, the cloud database market is on fire.Youll definitely feel the heat when you check out the recently released Cloud Database Report 2022 & Top 20 Vendors'
    },
    {
        url: '/images/pic13.svg',
        date: '. JAN 23, 2022 ',
        title: 'How to Load 100 Billion Rows of Data Ultrafast',
        parah: 'Its no secret that loading data into a database can be an arduous, time-consuming process.'
    },
    {
        url: '/images/pic14.svg',
        date: '. MAR 23, 2022 ',
        title: 'Are My Applications Data Intensive?',
        parah: 'SingleStore is a hybrid relational database geared toward data-intensive applications that runs on-prem, or in a private or public cloud.'
    },
    {
        url: '/images/pic15.svg',
        date: '. APR 19, 2022 ',
        title: 'Growth and Compliance in the Transport Industry',
        parah: 'The transport industry is a growing industry which had a lot of changes in the last couple of years in relation to compliance and technical innovations.'
    },
    {
        url: '/images/pic16.svg',
        date: '. SEP 12, 2021 ',
        title: 'Improving User Experience with Long-Lived Dashboard Sessions',
        parah: 'At Salesforce, we strive to balance the security of your data and apps with an efficient and enjoyable user experience.'
    },
    {
        url: '/images/pic17.svg',
        date: '. JAN 16, 2022 ',
        title: 'Improving User Experience with Long-Lived Dashboard Sessions',
        parah: 'At Salesforce, we strive to balance the security of your data and apps with an efficient and enjoyable user experience.'
    },
]

const Card = () => {
    return (
        <>
            <div className='mx-auto container xl:block hidden'>
                <div className='grid grid-cols-3'>
                    {data?.map((item , index) => (
                        <div key={index} className='flex flex-col max-w-[408px]'>
                            <div>
                                <img className='w-[408px] h-[267px] rounded-[8px] ' src={item.url} alt='' />
                            </div>
                            <div>
                                <p className='max-w-[144px] text-[#A3A3A3] text-lg leading-[18px] font-[700] not-italic pt-8 pb-2 avenir'>{item.date}</p>
                                <h2 className='max-w-[361px] text-[#FFFFFF] text-[28px] leading-[150%] font-bold not-italic pb-6 montserrat'>{item.title}</h2>
                                <p className='max-w-[406px] text-[#E5E5E5] text-[18px] leading-[150%] font-normal not-italic pb-20 avenir'>{item.parah}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            
            {/** For Mobile and tablit Screen */}
            <div className='mx-auto container px-8 xl:hidden block -mt-[4rem]'>
                {
                    dataMobile?.map((item , index) => (
                        <div key={index} className='flex flex-col md:flex-row justify-center items-center space-x-6'>
                            <div>
                                <img className='w-[439px] h-[267px]  rounded-[8px]' src={item.url} alt=''/>
                            </div>
                            <div className='flex flex-col justify-center '>
                                <p className='max-w-[142px]  text-[#A3A3A3] text-sm leading-[18px] font-normal not-italic pt-7 pb-2 avenir'>{item.date}</p>
                                <h2 className='max-w-[556px]  text-[#FFFFFF] text-lg leading-[150%] font-bold not-italic pb-4 montserrat'>{item.title}</h2>
                                <p className='max-w-[469px] text-[#E5E5E5] text-sm leading-[150%] font-normal not-italic pb-[56px] avenir'>{item.parah}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card
