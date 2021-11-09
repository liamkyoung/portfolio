import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BgSVG from '../components/BgSVG'

function Photos () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>Photos | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <Header />
      <BgSVG />
      Photos
    </div>
  )
}

export default Photos
