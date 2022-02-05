import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Gator from '../components/Gator'

function test() {
  return (
    <div className='bg-portfolio-gray h-screen text-white overflow-x-hidden'>
        <Head>
            <title>About | LKY </title>
            <meta name='description' content="LKY's Website" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

        <div className='flex justify-center align-center m-12'>
            <div className='bg-portfolio max-w-5xl rounded-3xl flex border-white border-2 align-center'>
                <div className='px-6 text-center md:text-left'>
                    <h1 className='text-4xl font-paytone pt-8 pb-4'>Example Title</h1>
                    <h2 className='text-xl font-reem text-red-400 hover:text-red-900'>react - sql - bootstrap - jsx</h2>
                    <p className='text-lg font-reem pt-6 pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quos, beatae necessitatibus reiciendis excepturi magnam corporis illo quo voluptate officiis? Culpa vero placeat nisi assumenda quia beatae praesentium, deserunt alias!</p>
                    <div className='flex justify-center pb-5'>
                        <h1 className='button'>code</h1>
                        <h1 className='button'>site</h1>
                        <h1 className='button'>video</h1>
                    </div>
                </div>
                <div className='hidden md:block cursor-pointer'>
                    <Gator />
                </div>
            </div>
        </div>
    </div>
  )
}

export default test
