import React from 'react'
import Head from 'next/head'
import BgSVG from '../components/backgrounds/BgSVG'
import Header from '../components/Header'

function resizeIframe (obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

function resume () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white'>
      <Head>
        <title>Resume | LKY </title>
        <meta name='description' content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='h-screen relative'>
        <Header />
        {/* <BgSVG /> */}
        <div className='flex justify-center min-h-3/4 max-h-screen relative z-100 pt-36'>
          <iframe
            className='absolute border-portfolio-red border-4'
            title='Resume'
            width='60%'
            height='100%'
            src='https://drive.google.com/file/d/1m85usoJdAmYiLqfYSQTUwA_8RRAokXKF/preview'
          />
        </div>
      </div>
    </div>
  )
}

export default resume
