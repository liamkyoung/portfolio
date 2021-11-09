import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BgSVG from '../components/BgSVG'

function Code () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>Code | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <Header />
      <BgSVG />
      Code
    </div>
  )
}

export default Code
