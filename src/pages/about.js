import React from 'react'
import BgSVG from '../components/backgrounds/BgSVG'
import Head from 'next/head'
import MainBG from '../components/backgrounds/MainBG'
import MainContent from '../components/about/MainContent'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'

function About () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white overflow-hidden'>
      <Head>
        <title>About | LKY </title>
        <meta name='description' content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800;900&family=Secular+One&display=swap" rel="stylesheet" />
      </Head>
      <MainBG />
      <Header />
      <SmallHeader />
      <div className='flex justify-center items-center mt-48 mb-24 relative animate-fade-in-down'>
        <MainContent />
      </div>
    </div>
  )
}

export default About
