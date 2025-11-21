import React from 'react'
import '../Components/fonts.css'
import HeroBanner from '../Components/HeroBanner'
import Products from '../Components/Products'
import CustomerReviews from '../Components/CustomerReviews'
import Best from '../Components/Best'
import Footer from '../Components/Footer'
function Home() {
    return (
        <>
            <section className='bg-[url("/Home-Bg.png")] bg-cover bg-no-repeat bg-center h-240 xs:h-200 sm:h-280 lg:h-500 xl:h-600 2xl:h-680  md:h-360 '>
                <HeroBanner />
            </section>
            <Products />
            <CustomerReviews />
            <Best />
            <Footer />
        </>


    )
}

export default Home