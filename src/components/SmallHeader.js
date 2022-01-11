import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

function SmallHeader () {
    return (
        <div className='absolute top-0 left-0 z-1000 w-full text-center flex justify-center md:hidden text-3xl font-paytone'>
            <nav className='relative min-w-min'>
            <Logo height={100} width={100} />
                <Link href='/'>
                    <ul className='headerBtn m-3'>code</ul>
                </Link>
                <Link href='/'>
                    <ul className='headerBtn m-3'>photos</ul>
                </Link>
                <Link href='/'>
                    <ul className='headerBtn m-3'>resume</ul>
                </Link>
                <Link href='/'>
                    <ul className='headerBtn m-3'>about</ul>
                </Link>
            </nav>
        </div>
    )
}

export default SmallHeader
