import React from 'react'
import Navbar from './Navbar'

function HeroBanner() {
    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <section className="flex justify-between items-start w-full px-11 mt-20
                                max-[1384px]:justify-center max-[842px]:flex-wrap
                                max-[530px]:flex-col max-[530px]:items-center"
            >

                {/* LEFT CONTENT */}
                <article className="text-white flex flex-col
                                    max-[842px]:justify-center max-[842px]:items-center
                                    max-[530px]:items-center max-[530px]:text-center"
                >
                    <h1
                        className="
              font-inter font-semibold
              text-[118px]
              leading-[1.02]
              mb-6
              max-[1366px]:text-[100px]
              max-[1200px]:text-[80px]
              max-[950px]:text-[70px]
              max-[530px]:text-[48px] max-[530px]:text-center max-[530px]:whitespace-normal max-[530px]:px-4
            "
                    >
                        Earth’s Exhale
                    </h1>

                    {/* Description */}
                    <p className="max-[842px]:text-center font-inter text-[23px] opacity-75 font-medium ml-2 mt-[-20px] max-w-[775px] w-full leading-7
                                  max-[530px]:ml-0 max-[530px]:px-4 max-[530px]:max-w-[320px]"
                    >
                        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
                        environment and its essential role in sustaining life.
                    </p>

                    {/* CTA BUTTONS */}
                    <span className="flex ml-[-5px] items-center gap-5 mt-4
                                     
                                     max-[532px]:flex-col max-[532px]:items-center max-[532px]:gap-3 max-[532px]:ml-0
                                    
                                     max-[530px]:items-center max-[530px]:justify-center"
                    >
                        <button className="border-2 border-white px-12 py-2 font-inter text-[28px] rounded-[12px] cursor-pointer
                                           max-[532px]:px-6 max-[532px]:py-2 max-[532px]:text-[16px] max-[532px]:rounded-[10px]"
                        >
                            <span className="text-white/75">Buy Now</span>
                        </button>

                        <span className="border-2 border-white rounded-full p-[22px] cursor-pointer
                                      
                                         max-[532px]:p-3 max-[532px]:rounded-full">
                            <img src="play.png" alt="play" className="h-6 ml-1 max-[532px]:h-4 max-[532px]:ml-0" />
                        </span>

                        <span className="font-indie text-[25px] text-white mt-1
                                    
                                         max-[532px]:text-[14px] max-[532px]:mt-0">
                            Live Demo...
                        </span>
                    </span>

                    {/* TESTIMONIAL CARD */}
                    <article
                        className="flex flex-col max-w-[409px] px-6 pt-8 pb-12 border border-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] mt-40 rounded-[45px] font-inter max-[842px]:mt-10
                                  
                                   max-[380px]:w-full max-[380px]:max-w-[320px] max-[380px]:px-4 max-[380px]:pt-6 max-[380px]:pb-6 max-[380px]:mt-8 max-[380px]:mx-auto"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/profile.png"
                                className="w-16 h-16 rounded-full object-cover
                                           shadow-[0px_1.95px_6.11px_rgba(0,0,0,0.101),0px_5.38px_16.9px_rgba(0,0,0,0.145),0px_12.96px_40.7px_rgba(0,0,0,0.189),0px_43px_135px_rgba(0,0,0,0.29)]
                                           max-[380px]:w-12 max-[380px]:h-12"
                                alt="profile"
                            />

                            <div className="flex flex-col ml-4 max-[380px]:ml-3">
                                <p className="text-white text-[22px] mb-1 max-[380px]:text-[16px]">
                                    Ronnie Hamill
                                </p>

                                <span className="flex gap-2 items-center mt-[-5px]">
                                    <img src="Star 1.png" className="h-[15px] w-[15px] max-[380px]:h-[12px] max-[380px]:w-[12px]" alt="star" />
                                    <img src="Star 2.png" className="h-[15px] w-[15px] max-[380px]:h-[12px] max-[380px]:w-[12px]" alt="star" />
                                    <img src="Star 3.png" className="h-[15px] w-[15px] max-[380px]:h-[12px] max-[380px]:w-[12px]" alt="star" />
                                    <img src="Star 4.png" className="h-[15px] w-[15px] max-[380px]:h-[12px] max-[380px]:w-[12px]" alt="star" />
                                    <img src="Star 5.png" className="h-[13px] w-[7px] max-[380px]:h-[12px] max-[380px]:w-[7px]" alt="star" />
                                </span>
                            </div>
                        </div>

                        <p className="text-white text-[17px] leading-5 opacity-75 max-[380px]:text-[14px] max-[380px]:leading-[1.4]">
                            I can't express how thrilled I am with my new natural plants!
                            They bring such a fresh and vibrant energy to my home.
                        </p>
                    </article>
                </article>

                {/* RIGHT HERO IMAGE CARD */}
                <article className="min-w-[300px] w-[512px] h-[644px] rounded-[45px] relative border border-white 
          max-[1384px]:h-[344px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] 
          self-end max-[842px]:ml-0 max-[842px]:mt-40 max-[842px]:w-[100px] max-[842px]:h-[250px]
          
          max-[380px]:min-w-0 max-[380px]:w-full max-[380px]:max-w-[320px] max-[380px]:h-[290px] max-[380px]:mx-auto">

                    <img
                        src="/plant1.png"
                        className="
                        
              absolute top-[-120px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain
              max-[1384px]:top-[-250px]
              max-[1092px]:h-[550px]
              max-[960px]:h-[580px]
              max-[842px]:top-[-200px] max-[842px]:h-[300px] max-[842px]:w-[300px]

        
              max-[380px]:w-[220px] max-[380px]:h-[220px] max-[380px]:top-[-80px]
            "
                        alt="plant"
                    />

                    <div className="absolute bottom-20 left-10 right-6 text-white font-inter max-[1384px]:top-[200px] max-[842px]:top-[100px]
                        
                        max-[380px]:top-[150px] max-[380px]:left-4 max-[380px]:right-4 
                    ">
                        <span className="ml-9 max-[842px]:ml-0 block">
                            <p className="max-[1384px]:text-[15px] text-[23px] opacity-75 mb-1 max-[380px]:text-[12px]">
                                Indoor Plant
                            </p>

                            <div className="flex items-center justify-between mb-4">
                                <h3 className="max-[1384px]:text-[20px] text-[34px] leading-tight opacity-75 font-normal max-[380px]:text-[16px]">
                                    Aglaonema <span className="ml-1 max-[380px]:ml-0">plant</span>
                                </h3>
                                <img src="/right.png" className="cursor-pointer w-5 h-5 opacity-75 relative right-2 max-[380px]:w-4 max-[380px]:h-4" alt="right" />
                            </div>

                            {/* RIGHT CARD BUY NOW */}
                            <button className="max-[1384px]:text-[15px] border-2 border-white px-12 py-2 font-inter text-[28px] rounded-[12px] cursor-pointer
                                               max-[532px]:px-6 max-[532px]:py-2 max-[532px]:text-[16px] max-[532px]:rounded-[10px]
                                               max-[380px]:px-4 max-[380px]:py-1 max-[380px]:text-[12px]">
                                <span className="text-white/75">Buy Now</span>
                            </button>
                        </span>

                        <div className="mt-12 max-[1384px]:mt-3 mb-[-20px] flex items-center justify-center gap-3">
                            <span className="w-6 h-2 bg-white rounded-full"></span>
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                    </div>
                </article>
            </section>

            {/* TITLE for bottom cards */}
            <p className="text-white font-inter font-semibold text-[55px] mt-30 mb-20 text-center mx-auto my-auto 
            mr-5 ml-5">
                Our Trendy plants
            </p>

            {/* BOTTOM CARD WRAPPER */}
            <section className="ml-10 mb-[200px] mr-10 flex flex-col justify-center items-center mt-30 gap-15 px-6 max-[1284px]:px-8">

                {/* CARD 1 */}
                <div className="min-w-[300px] max-w-[1650px] w-full h-[526px] 
          border border-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[15px]
          rounded-[151px] flex justify-evenly mt-20 
          max-[1284px]:flex-col max-[1284px]:h-auto max-[1284px]:rounded-[48px] 
          max-[1284px]:items-center gap-34 max-[1284px]:gap-0

       
          max-[568px]:h-auto max-[568px]:rounded-[28px] max-[568px]:px-4 max-[568px]:py-6
          max-[568px]:gap-6
          ">
                    {/* IMAGE */}
                    <div className="flex justify-center items-center">
                        <img
                            src="plant2.png"
                            alt=""
                            className="
                max-w-[700px] min-w-[300px] w-full h-[700px] mt-[-200px] object-contain
                [box-shadow:0px_0.54px_1.59px_rgba(0,0,0,0.0288),
                0px_1.22px_3.62px_rgba(0,0,0,0.0418),
                0px_2.13px_6.31px_rgba(0,0,0,0.0515),
                0px_3.38px_10.02px_rgba(0,0,0,0.06),
                0px_5.22px_15.46px_rgba(0,0,0,0.0685),
                0px_8.14px_24.12px_rgba(0,0,0,0.0782),
                0px_13.51px_40.04px_rgba(0,0,0,0.0912),
                0px_27px_80px_rgba(0,0,0,0.12)]
                max-[1284px]:w-[420px] max-[1284px]:h-[420px]
                max-[1284px]:mt-[-120px] max-[1284px]:min-w-[280px]

                
                max-[568px]:w-[220px] max-[568px]:h-[220px] max-[568px]:mt-[-20px] max-[568px]:min-w-[180px]
              "
                        />
                    </div>

                    {/* TEXT CONTENT */}
                    <article className="self-center flex flex-col gap-5 mr-10 max-[1284px]:mr-0 max-[1284px]:text-center p-10 rounded-[40px]
                        max-[568px]:p-4 max-[568px]:gap-3 max-[568px]:mt-2
                    ">
                        <p className="font-inter font-semibold text-[38px] text-white max-[568px]:text-[18px]">
                            For Your Desks Decorations
                        </p>

                        <p className="font-inter font-semibold text-[20px] text-white leading-6 max-w-[732px] w-full max-[568px]:text-[14px] max-[568px]:leading-5 max-[568px]:max-w-[320px]">
                            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                        </p>

                        <p className="font-inter font-semibold text-[38px] text-white max-[568px]:text-[18px]">Rs. 599/-</p>

                        <span className="block flex gap-8 justify-center max-[568px]:gap-4 max-[568px]:flex-col max-[568px]:items-center">
                            <button className="border-2 border-white px-15 py-2 font-inter text-[28px] rounded-[12px] cursor-pointer max-[568px]:px-6 max-[568px]:py-2 max-[568px]:text-[16px]">
                                <span className="text-white font-medium text-[28px] max-[568px]:text-[16px]">Explore</span>
                            </button>

                            <span className="border-[2px] border-white p-4 rounded-[12px] max-[568px]:p-3">
                                <img src="bag.png" className="cursor-pointer h-[34px] w-[34px] max-[568px]:h-[24px] max-[568px]:w-[24px]" alt="bag" />
                            </span>
                        </span>
                    </article>
                </div>

                {/* CARD 2 */}
                <div className="min-w-[300px] max-w-[1650px] w-full h-[526px]
          border border-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[15px]
          rounded-[151px] flex flex-row-reverse justify-evenly mt-20
          max-[1284px]:flex-col max-[1284px]:h-auto max-[1284px]:rounded-[48px]
          max-[1284px]:items-center max-[1284px]:gap-0

          
          max-[568px]:h-auto max-[568px]:rounded-[28px] max-[568px]:px-4 max-[568px]:py-6
          max-[568px]:gap-6
          ">

                    <div className="flex justify-center items-center">
                        <img
                            src="plant3.png"
                            alt=""
                            className="
                w-[700px] h-[700px] mt-[-150px] object-contain
                [box-shadow:0px_0.54px_1.59px_rgba(0,0,0,0.0575),
                0px_1.22px_3.62px_rgba(0,0,0,0.0836),
                0px_2.13px_6.31px_rgba(0,0,0,0.103),
                0px_3.38px_10.02px_rgba(0,0,0,0.12),
                0px_5.22px_15.46px_rgba(0,0,0,0.137),
                0px_8.14px_24.12px_rgba(0,0,0,0.1564),
                0px_13.51px_40.04px_rgba(0,0,0,0.1825),
                0px_27px_80px_rgba(0,0,0,0.24)]
                max-[1284px]:w-[420px] max-[1284px]:h-[620px]
                max-[1284px]:mt-[-100px] max-[1284px]:min-w-[280px]
                max-[568px]:w-[220px] max-[568px]:h-[220px] max-[568px]:mt-[-20px] max-[568px]:min-w-[180px]
              "
                        />
                    </div>

                    <article className="self-center flex flex-col gap-5 ml-20 max-[1284px]:ml-0 max-[1284px]:mt-[-150px] max-[1284px]:text-center p-10 rounded-[40px]
                        max-[568px]:p-4 max-[568px]:gap-3 max-[568px]:mt-2
                    ">
                        <p className="font-inter font-semibold text-[38px] text-white max-[568px]:text-[18px]">For Your Desks Decorations</p>

                        <p className="font-inter font-semibold text-[20px] text-white leading-6 max-w-[732px] w-full max-[568px]:text-[14px] max-[568px]:leading-5 max-[568px]:max-w-[320px]">
                            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting.
                        </p>

                        <p className="font-inter font-semibold text-[38px] text-white max-[568px]:text-[18px]">Rs. 599/-</p>

                        <span className="block flex gap-8 justify-center max-[568px]:gap-4 max-[568px]:flex-col max-[568px]:items-center">
                            <button className="border-2 border-white px-15 py-2 font-inter text-[28px] rounded-[12px] cursor-pointer max-[568px]:px-6 max-[568px]:py-2 max-[568px]:text-[16px]">
                                <span className="text-white font-medium text-[28px] max-[568px]:text-[16px]">Explore</span>
                            </button>

                            <span className="border-[2px] border-white p-4 rounded-[12px] max-[568px]:p-3">
                                <img src="bag.png" className="cursor-pointer h-[34px] w-[34px] max-[568px]:h-[24px] max-[568px]:w-[24px]" alt="bag" />
                            </span>
                        </span>
                    </article>
                </div>

            </section>
        </>
    )
}

export default HeroBanner
