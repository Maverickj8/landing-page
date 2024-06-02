import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <>
    {/* The navigation starts */}
    <nav className='flex items-center justify-between py-4 px-6 border-b-2'>
        <div className='space-x-6 font-semibold'>
            <Link href="/">MUSIC</Link>
            <Link href="/">Live</Link>
            <Link href="/">Push</Link>
            <Link href="/">Note</Link>
            <Link href="/">Link</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Packs</Link>
            <Link href="/">Help</Link>
            <Link href="/" className='text-[#ff764d]'>More <span className='text-[20px]'>+</span> </Link>
        </div>

        <div className='space-x-6 font-semibold'>
           <Link href="/" className='text-[#0000ff]'>Try Live 12 for free</Link>
           <Link href="/" className='text-[10px]'>Log in or register</Link>
        </div>
    </nav>
    {/* The navigation ends */}
    </>
  )
}

export default Navigation