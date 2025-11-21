import React from 'react'

function CustomerCard({ customerImg, customerName, customerReview }) {
    return (
        <article className="flex flex-col
                        max-w-[512px] w-full h-[480px] px-12 pt-8 pb-12
                        border border-white bg-[#262E22]
                        mt-30 rounded-[77px] font-inter mb-0
                        max-[568px]:max-w-[340px]
                        max-[568px]:h-auto
                        max-[568px]:px-6
                        max-[568px]:pt-6
                        max-[568px]:pb-8
                        max-[568px]:rounded-[20px]
                        max-[568px]:mt-6
                        ml-10 mr-10
                    ">
            <div className="flex items-center gap-3 mt-10
                            max-[568px]:mt-4 max-[568px]:gap-3">
                <img
                    src={customerImg}
                    className="w-[88px] h-[88px] rounded-full object-cover
                      shadow-[0px_2.77px_2.21px_rgba(0,0,0,0.0422),
                              0px_6.65px_5.32px_rgba(0,0,0,0.0606),
                              0px_12.52px_10.02px_rgba(0,0,0,0.075),
                              0px_22.34px_17.87px_rgba(0,0,0,0.0894),
                              0px_41.78px_33.42px_rgba(0,0,0,0.1078),
                              0px_100px_80px_rgba(0,0,0,0.15)] 
                      max-[568px]:w-[60px] max-[568px]:h-[60px]"
                />

                <div className="flex flex-col ml-4
                                max-[568px]:ml-3">
                    <p className="text-white font-semibold text-[38px] mb-1
                                  max-[568px]:text-[20px] max-[568px]:mb-0">
                        {customerName}
                    </p>

                    <span className="flex gap-2 items-center mt-[-5px]
                                     max-[568px]:mt-1 max-[568px]:gap-2">
                        <img src="Star 1.png" className="h-[19px] w-[19px] max-[568px]:h-[14px] max-[568px]:w-[14px]" />
                        <img src="Star 2.png" className="h-[19px] w-[19px] max-[568px]:h-[14px] max-[568px]:w-[14px]" />
                        <img src="Star 3.png" className="h-[19px] w-[19px] max-[568px]:h-[14px] max-[568px]:w-[14px]" />
                        <img src="Star 4.png" className="h-[19px] w-[19px] max-[568px]:h-[14px] max-[568px]:w-[14px]" />
                        <img src="Star 5.png" className="h-[19px] w-[9px] max-[568px]:h-[14px] max-[568px]:w-[7px]" />
                    </span>
                </div>
            </div>

            <p className="text-white font-normal font-inter text-[24px] leading-5 opacity-75 mt-10
                          max-[568px]:text-[15px] max-[568px]:leading-6 max-[568px]:mt-4 max-[568px]:mb-4">
                {customerReview}
            </p>
        </article>
    )
}

export default CustomerCard
