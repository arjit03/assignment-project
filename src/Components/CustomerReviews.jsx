import React from 'react'
import CustomerCard from './CustomerCard'
function CustomerReviews() {
    return (
        <section className='text-white bg-[#1C2418] flex flex-col justify-center items-center'>
            <p
                className='text-white font-inter font-semibold text-[55px] text-center  
  [text-shadow:0px_1.99px_1.59px_rgba(0,0,0,0.0863),
               0px_4.53px_3.62px_rgba(0,0,0,0.1254),
               0px_7.88px_6.31px_rgba(0,0,0,0.1545),
               0px_12.52px_10.02px_rgba(0,0,0,0.18),
               0px_19.32px_15.46px_rgba(0,0,0,0.2055),
               0px_30.15px_24.12px_rgba(0,0,0,0.2346),
               0px_50.05px_40.04px_rgba(0,0,0,0.2737),
               0px_100px_80px_rgba(0,0,0,0.36)]
               max-[568px]:text-[35px]'
            >
                Customer Review
            </p>
            <div className='flex justify-center items-center flex-wrap gap-10'>
                <CustomerCard customerImg={'profile1.png'} customerName={'Shelly Russel'} customerReview={'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!'} />
                <CustomerCard customerImg={'profile2.jpg'} customerName={'Lula Rolfson'} customerReview={'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.'} />
                <CustomerCard customerImg={'profile3.png'} customerName={'Carol Huels'} customerReview={"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"} />
            </div>
        </section>
    )
}

export default CustomerReviews