import React from 'react'

function ProductCard({ productTitle, productDescription, productPrice, productImg }) {
    return (
        <article className="
            min-w-[300px] w-[512px] h-[644px] rounded-[77px] relative
            border border-white bg-[#262E22] mb-40
            
            max-[568px]:min-w-[180px] max-[568px]:w-[280px] max-[568px]:h-[480px] max-[568px]:rounded-[28px]
        ">
            <img
                src={productImg}
                className="
                    absolute top-[-120px] left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain
                    
                    max-[568px]:top-[-70px] max-[568px]:w-[220px] max-[568px]:h-[220px]
                "
                alt="plant"
            />

            <div className="absolute top-[310px] bottom-20 left-10 right-6 text-white font-inter pt-10
               
                max-[568px]:top-[200px] max-[568px]:left-6 max-[568px]:right-6 max-[568px]:pt-6 max-[568px]:bottom-8
            ">
                <span className='ml-9 block max-[568px]:ml-0'>
                    <div className="flex flex-col items-start justify-start mb-4">
                        <h3 className="text-[34px] font-light leading-tight text-[38px] text-[rgba(255, 255, 255, 0.75)] opacity-75 font-normal
                           
                            max-[568px]:text-[20px] max-[568px]:leading-tight
                        ">
                            {productTitle}
                        </h3>

                        <p className="text-[24px] text-[rgba(255, 255, 255, 0.75)] opacity-75 font-normal
                           
                            max-[568px]:text-[14px] max-[568px]:leading-5
                        ">
                            {productDescription}
                        </p>
                    </div>

                    <div className='absolute bottom-[-10px] left-10 right-6 flex justify-between
                    
                        max-[568px]:bottom-2 max-[568px]:left-6 max-[568px]:right-6 max-[568px]:items-center
                    '>
                        <span className="ml-[-5px] font-inter text-[38px] font-normal text-[rgba(255,255,255,0.75)] opacity-75
                            
                            max-[568px]:text-[18px]
                        ">
                            Rs. {productPrice}/-
                        </span>

                        <button className="mr-[25px] border-2 border-white px-3 py-3 font-inter text-[28px] font-normal opacity-75 text-[rgba(255,255,255,0.75)] cursor-pointer rounded-[12px]
                            
                            max-[568px]:mr-0 max-[568px]:px-3 max-[568px]:py-2 max-[568px]:rounded-[10px]
                        ">
                            <img src="bag.png" alt="" className='w-[27px] h-[27px] max-[568px]:w-[20px] max-[568px]:h-[20px]' />
                        </button>
                    </div>
                </span>
            </div>
        </article>
    )
}

export default ProductCard
