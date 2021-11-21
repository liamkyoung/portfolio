import React from 'react'
import Head from 'next/head'
import Grid from '../components/photos/Grid'
import Header from '../components/Header'
import MainBG from '../components/backgrounds/MainBG'

function Photos () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white'>
      <Head>
        <title>Photos | LKY</title>
        <meta name='description' content="LKY's Website" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap' rel='stylesheet' />
      </Head>
      <div className='relative z-100'>
        <Header />
        <MainBG />
        <div className='h-5' />
      </div>
      <div className='flex justify-center mt-44'>
        <Grid />
      </div>
      {/* Header */}
      {/* Menu */}
      {/* Grid */}
    </div>
  )
}

export default Photos
