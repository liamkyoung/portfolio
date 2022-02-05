import React from 'react'
import BgSVG from '../components/backgrounds/BgSVG'
import Head from 'next/head'
import SmallHeader from '../components/SmallHeader'
import Header from '../components/Header'

function contact() {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>Contact | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <Header />
      <SmallHeader />
      <BgSVG />
      Contact
    </div>
  )
}

export default contact
