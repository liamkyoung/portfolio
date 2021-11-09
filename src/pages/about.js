import React from 'react'
import BgSVG from '../components/BgSVG'
import Head from 'next/head'
import Header from '../components/Header'

function About () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>About | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <Header />
      <BgSVG />
      About
    </div>
  )
}

export default About
