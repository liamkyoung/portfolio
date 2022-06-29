import React from 'react'
import Head from 'next/head'
import Grid from '../components/photos/Grid'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'
import MainBG from '../components/backgrounds/MainBG'
import ImageModal from '../components/photos/ImageModal'
import { ModalProvider } from '../components/photos/ModalProvider'

function Photos () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white'>
      <Head>
        <title>Photos | LKY</title>
        <meta name='description' content="LKY's Website" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='relative z-100'>
        <MainBG />
        <Header />
        <SmallHeader />
        <div className='h-5' />
      </div>
      <div className='flex justify-center mt-36 -mb-36'>
        <ModalProvider>
          <div className='relative'>
            <ImageModal />
          </div>
          <Grid />
        </ModalProvider>
      </div>
    </div>
  )
}

export default Photos
