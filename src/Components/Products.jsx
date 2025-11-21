import React from 'react'
import './fonts.css'
import ProductCard from './ProductCard'

function Products() {
    return (
        <section className='text-white bg-[#1C2418] flex flex-col justify-center items-center'>
            <p
                className='text-white font-inter font-semibold text-[55px] mt-35 mb-35 max-[842px]:mt-400 max-[1536px]:mt-70  max-[1284px]:mt-130 max-[1280px]:mt-240 max-[1024px]:mt-380
    max-[842px]:mt-450
[text-shadow:0px_1.99px_1.59px_rgba(0,0,0,0.0863),
           0px_4.53px_3.62px_rgba(0,0,0,0.1254),
           0px_7.88px_6.31px_rgba(0,0,0,0.1545),
           0px_12.52px_10.02px_rgba(0,0,0,0.18),
           0px_19.32px_15.46px_rgba(0,0,0,0.2055),
           0px_30.15px_24.12px_rgba(0,0,0,0.2346),
           0px_50.05px_40.04px_rgba(0,0,0,0.2737),
           0px_100px_80px_rgba(0,0,0,0.36)]
    max-[1284px]:mt-150 max-[768px]:mt-520 max-[742px]:mt-540 max-[702px]:mt-560 max-[640px]:mt-610 max-[568px]:mt-500 max-[568px]:text-center    
    max-[530px]:mt-530  max-[532px]:mt-510 max-[448px]:mt-550 max-[444px]:mt-570 max-[423px]:mt-580 max-[383px]:mt-590 max-[340px]:mt-600

    
    max-[568px]:text-[32px]
    max-[568px]:leading-[1.1]
    max-[568px]:px-4
    max-[568px]:font-semibold
    max-[568px]:text-center
    max-[484px]:mt-550 max-[448px]:mt-570
    '
            >
                Our Top Selling plants
            </p>

            <div className='flex flex-wrap items-center justify-evenly   '>
                <ProductCard producTitle={'Aglaonema plant'}
                    productDescription={'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care'}
                    productPrice={'300'} productImg={'plant1.png'} />
                <ProductCard producTitle={'Plantain Lilies'}
                    productDescription={'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.'}
                    productPrice={'380'} productImg={'plant2.png'} />
                <ProductCard producTitle={'Cactus'}
                    productDescription={'It is known for their ability to thrive in arid environments'}
                    productPrice={'259'} productImg={'plant3-1.png'} />
                <ProductCard producTitle={'Swiss cheese Plant'}
                    productDescription={'It is a popular tropical houseplant known for its distinctive, perforated leaves'}
                    productPrice={'400'} productImg={'plant4.png'} />
                <ProductCard producTitle={'Sansevieria plant'}
                    productDescription={'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.'}
                    productPrice={'450'} productImg={'plant5.png'} />
                <ProductCard producTitle={'Agave plant'}
                    productDescription={'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.'}
                    productPrice={'359'} productImg={'plant6.png'} />

            </div>

        </section>
    )
}

export default Products