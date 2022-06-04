import React from 'react'
import BgSVG from '../components/backgrounds/BgSVG'
import Head from 'next/head'
import MainBG from '../components/backgrounds/MainBG'
import Information from '../components/about/Information'
import Facts from '../components/about/Facts'
import Timer from '../components/about/Timer'
import MainContent from '../components/about/MainContent'
import AboutSVG from '../components/backgrounds/svgs/AboutSVG'
import Headshot from '../components/Headshot'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'

function About () {
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
      <Header />
      <SmallHeader />

      <div className='flex justify-center items-center'>
        <div>
          <Headshot />
          <Timer />
        </div>
        <MainContent />
      </div>
      
      <AboutSVG />
      {/* <Information /> */}
      <Facts />
    </div>
  )
}

export default About
