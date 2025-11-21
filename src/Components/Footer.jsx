import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#1C2418] text-white '>
            <div className='flex justify-around
                max-[1493px]:flex-col max-[1493px]:items-center max-[1493px]:gap-8 max-[1493px]:px-6 max-[1493px]:py-10'>

                {/* LOGO + TEXT */}
                <div className=' flex flex-col gap-10 my-2 max-[1493px]:items-center max-[1493px]:text-center'>
                    <div className='flex gap-4 max-[1493px]:flex-col max-[1493px]:items-center'>
                        <img
                            src="/plant.png"
                            alt=""
                            className='w-24 h-24
  [box-shadow:0px_2.32px_1.85px_0px_rgba(0,0,0,0.0439),
              0px_5.39px_4.31px_0px_rgba(0,0,0,0.0634),
              0px_9.68px_7.74px_0px_rgba(0,0,0,0.0782),
              0px_16.06px_12.85px_0px_rgba(0,0,0,0.0918),
              0px_26.45px_21.16px_0px_rgba(0,0,0,0.1066),
              0px_46.23px_36.99px_0px_rgba(0,0,0,0.1261),
              0px_100px_80px_0px_rgba(0,0,0,0.17)]'
                        />

                        <span className='font-inter font-[900] opacity-75 text-white text-[45px] mt-4 max-[1493px]:mt-0 max-[1493px]:text-[36px]'>FloraVision.</span>
                    </div>

                    <p className='font-inter font-[500] text-white text-[28px] max-w-[550px] w-full ml-4 leading-8 
                       max-[1493px]:ml-0 max-[1493px]:text-[20px] max-[1493px]:max-w-[640px] max-[1493px]:px-4'>
                        "From lush indoor greens to vibrant<br /> outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div className='font-inter flex flex-col gap-4 items-start 
                    max-[1493px]:items-center max-[1493px]:text-center'>
                    <p className='font-extrabold text-[28px] mb-8 max-[1493px]:mb-4'>Quick Link’s</p>
                    <a href="#" className='underline-offset-5 underline font-medium text-[24px] max-[1493px]:text-[18px]'>Home</a>
                    <a href="#" className='underline underline-offset-5 font-medium text-[24px] max-[1493px]:text-[18px]'>Type’s Of plant’s</a>
                    <a href="#" className='underline underline-offset-5 font-medium text-[24px] max-[1493px]:text-[18px]'>Contact</a>
                    <a href="#" className='underline underline-offset-5 font-medium text-[24px] max-[1493px]:text-[18px]'>Privacy</a>
                </div>


                <div className='flex flex-col flex-1 max-w-[562px] w-full gap-14 
                    max-[1493px]:max-w-[720px] max-[1493px]:w-[92%] max-[1493px]:items-center'>


                    <p className='font-inter font-extrabold text-[28px] 
                        max-[1493px]:text-center'>
                        For Every Update.
                    </p>

                    <form action="" className='relative 
                        max-[1493px]:flex max-[1493px]:flex-col max-[1493px]:gap-3 max-[1493px]:w-full'>


                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='font-inter text-[24px] font-medium border-2 rounded-[8px] pl-6 w-full py-[18px] pr-44 border-white
                                max-[1493px]:pr-6 max-[1493px]:text-[18px] max-[1493px]:w-full'
                        />


                        <button
                            className='font-inter font-bold text-[22px] px-2 py-2 rounded-[8px] absolute top-1 right-1 border-4 border-white bg-white text-black py-[13.5px] cursor-pointer
                                max-[1493px]:static max-[1493px]:w-full max-[1493px]:text-[18px] max-[1493px]:py-3 max-[1493px]:mt-1'>
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>


            <div className='flex justify-between items-start 
                max-[1493px]:flex-col max-[1493px]:items-center max-[1493px]:gap-6 max-[1493px]:pb-8 max-[1493px]:px-6'>


                <div className='ml-30 flex justify-between max-w-[230px] w-full mt-20 
                    max-[1493px]:ml-0 max-[1493px]:mt-4 max-[1493px]:w-auto max-[1493px]:gap-10 max-[1493px]:justify-center'>
                    <p className='font-inter text-white font-extrabold text-[28px]'>FB</p>
                    <p className='font-inter text-white font-extrabold text-[28px]'>TW</p>
                    <p className='font-inter text-white font-extrabold text-[28px]'>LI</p>
                </div>

                <div className='font-inter text-white font-medium text-[24px] mt-20 mr-84 mb-40
                    max-[1493px]:mt-4 max-[1493px]:mr-0 max-[1493px]:mb-0 max-[1493px]:text-[16px]'>
                    FloraVision © all right reserve
                </div>
            </div>
        </footer>
    )
}

export default Footer
