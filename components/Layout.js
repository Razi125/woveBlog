import React from 'react'
import Card from './Card/Card'
import Footer from './Footer'
import Header from './Header'
import WoveNews from './woveNews/WoveNews'
 
const Layout = () => {
    return (
        <div className='bg-[#000000] min-h-screen'>
            <Header />
            <WoveNews/>
            <Card/>
            <Footer/>
        </div>
        
    )
}

export default Layout
