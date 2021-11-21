import React from 'react'
import BgSVG from '../components/backgrounds/BgSVG'
import Head from 'next/head'
import Header from '../components/Header'
import MainBG from '../components/backgrounds/MainBG'
import Information from '../components/about/Information'
import Facts from '../components/about/Facts'

function About () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white'>
      <Head>
        <title>About | LKY </title>
        <meta name='description' content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <MainBG />
      <Information />
      <Facts />
    </div>
  )
}

export default About
