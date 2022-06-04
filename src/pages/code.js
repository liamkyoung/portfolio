import React from 'react'
import Head from 'next/head'
import WorkSection from '../components/WorkSection'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'
import BgSVG from '../components/backgrounds/BgSVG'

function Code () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white'>
      <Head>
        <title>Code | LKY </title>
        <meta name='description' content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <SmallHeader />
      <div className='p-52'>
        <WorkSection />
      </div>
    </div>
  )
}

export default Code
