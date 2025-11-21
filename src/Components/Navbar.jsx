import { useState, useEffect, useRef } from 'react'

export default function navbar() {
    const [open, setOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false) // desktop search
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false) // mobile full-screen search
    const inputRef = useRef(null)
    const mobileInputRef = useRef(null)
    const searchWrapRef = useRef(null)

    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') {
                setOpen(false)
                setSearchOpen(false)
                setMobileSearchOpen(false)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    // focus input when desktop search opens
    useEffect(() => {
        if (searchOpen && inputRef.current) inputRef.current.focus()
    }, [searchOpen])

    // focus mobile input when mobile search opens
    useEffect(() => {
        if (mobileSearchOpen && mobileInputRef.current) mobileInputRef.current.focus()
    }, [mobileSearchOpen])

    // close desktop search when clicking outside
    useEffect(() => {
        function onDocClick(e) {
            if (searchOpen && searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
                setSearchOpen(false)
            }
        }
        document.addEventListener('mousedown', onDocClick)
        return () => document.removeEventListener('mousedown', onDocClick)
    }, [searchOpen])

    // close desktop search if window resized below 800px
    useEffect(() => {
        function onResize() {
            if (window.innerWidth < 800 && searchOpen) setSearchOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [searchOpen])

    const tryToggleSearch = () => {
        // allow desktop expansion only on >=800px; on smaller screens open mobile full-screen search
        if (typeof window !== 'undefined' && window.innerWidth >= 800) {
            setSearchOpen(v => {
                const next = !v
                if (next) setOpen(false)
                return next
            })
        } else {
            // open mobile full-screen search
            setMobileSearchOpen(true)
        }
    }

    return (
        <header>
            <nav className='flex justify-between items-center h-40 max-[380px]:h-32 px-2'>
                <div className='flex gap-2 my-2 max-[550px]:gap-2 max-[380px]:gap-1 items-center'>
                    <img
                        src="/plant.png"
                        alt=""
                        className='ml-10 h-12 max-[550px]:h-9 max-[380px]:h-7'
                    />
                    <span className='font-inter font-[900] opacity-75 text-[28px] text-[rgba(255,255,255,1)] max-[550px]:text-[18px] max-[380px]:text-[14px]'>
                        FloraVision.
                    </span>
                </div>

                {/* center links - hidden when desktop searchOpen is true, or below 1146px */}
                <div className={`${searchOpen ? 'hidden' : 'flex justify-evenly gap-18 font-indie font-[400] text-2xl text-[rgba(255,255,255,1)] max-[1146px]:hidden'}`}>
                    <a href="#">Home</a>
                    <span className='flex items-center'>
                        <a href="#">Plants Type</a>
                        <img src="/arrow.png" alt="" className='h-2 relative top-2 left-3 cursor-pointer' />
                    </span>
                    <a href="#">More</a>
                    <a href="#">Contact</a>
                </div>

                <div className='flex gap-12 max-[550px]:gap-6 items-center max-[380px]:gap-4'>
                    {/* SEARCH WRAPPER - contains icon + animated input (desktop) */}
                    <div ref={searchWrapRef} className='flex items-center gap-2'>
                        <button
                            onClick={tryToggleSearch}
                            aria-label='Open search'
                            className='p-1'
                        >
                            <img
                                src="/search.png"
                                alt=""
                                className='h-6 opacity-75 max-[550px]:h-5 max-[380px]:h-4'
                            />
                        </button>

                        {/* animated input: only visible on >=800px (hidden under 800px) */}
                        <input
                            ref={inputRef}
                            type='search'
                            placeholder='Search plants, types...'
                            className={`transition-all duration-300 ease-in-out bg-transparent text-white placeholder-gray-300 border-b border-white/20 outline-none max-[800px]:hidden ${searchOpen ? 'w-64 opacity-100 pr-2' : 'w-0 opacity-0 pr-0'} `}
                            onFocus={() => setSearchOpen(true)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {

                                    console.log('search:', e.currentTarget.value)

                                    e.currentTarget.value = ''
                                    setSearchOpen(false)
                                }
                            }}
                        />
                    </div>

                    <img
                        src="/bag.png"
                        alt=""
                        className='h-6 opacity-75 max-[550px]:h-5 max-[380px]:h-4 cursor-pointer'
                    />


                    <span
                        className='flex flex-col mr-8 max-[380px]:mr-4 cursor-pointer'
                        onClick={() => {

                            if (typeof window !== 'undefined' && window.innerWidth < 1146) setOpen(true)
                        }}
                        aria-label='Open navigation drawer'
                        role='button'
                    >
                        <img
                            src="/Line 1.png"
                            alt=""
                            className='max-[380px]:w-4 max-[380px]:-translate-x-1 max-[380px]:-rotate-2'
                        />
                        <img
                            src="/Line 2.png"
                            alt=""
                            className='pt-2 w-6 self-end max-[550px]:w-5 max-[380px]:w-4 max-[380px]:translate-x-1 max-[380px]:rotate-2'
                        />
                    </span>
                </div>
            </nav>


            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-60 visible' : 'opacity-0 invisible'}`}
                style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />


            <aside
                className={`fixed right-0 top-0 h-full z-50 w-72 max-w-[80%] bg-[#1C2418] shadow-xl transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!open}
            >
                <div className='p-4 flex items-center justify-between border-b border-white text-white'>
                    <div className='flex items-center gap-3'>
                        <img src='/plant.png' alt='logo' className='h-8 w-8' />
                        <span className='font-semibold'>FloraVision</span>
                    </div>
                    <button onClick={() => setOpen(false)} aria-label='Close drawer' className='p-2 rounded hover:bg-white/10'>
                        ✕
                    </button>
                </div>

                <nav className='p-6'>
                    <ul className='flex flex-col gap-6'>
                        <li>
                            <a href='#home' onClick={() => setOpen(false)} className='block text-lg font-medium text-white'>Home</a>
                        </li>
                        <li>
                            <a href='#plants' onClick={() => setOpen(false)} className='block text-lg font-medium text-white'>Plants Type</a>
                        </li>
                        <li>
                            <a href='#more' onClick={() => setOpen(false)} className='block text-lg font-medium text-white'>More</a>
                        </li>
                        <li>
                            <a href='#contact' onClick={() => setOpen(false)} className='block text-lg font-medium text-white'>Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className='mt-auto p-4 border-t border-white'>
                    <button className='w-full py-2 rounded bg-white text-[#1C2418] hover:bg-white/90' onClick={() => setOpen(false)}>
                        Close
                    </button>
                </div>
            </aside>

            <div className={`fixed inset-0 z-60 flex items-start p-6 transition-opacity duration-300 ${mobileSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className='w-full'>
                    <div className={`mx-auto max-w-xl transition-transform duration-300 ${mobileSearchOpen ? 'translate-y-0' : 'translate-y-6'}`}>
                        <div className='bg-[#1C2418]/70 backdrop-blur-sm rounded-md p-4'>
                            <div className='flex items-center gap-3'>
                                <input
                                    ref={mobileInputRef}
                                    type='search'
                                    placeholder='Search plants, types...'
                                    className='w-full px-3 py-2 border border-white/20 bg-transparent text-white placeholder-white/60 rounded outline-none transition-colors'
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            console.log('mobile search:', e.currentTarget.value)
                                            setMobileSearchOpen(false)
                                        }
                                    }}
                                />
                                <button onClick={() => setMobileSearchOpen(false)} className='p-2 text-white'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
