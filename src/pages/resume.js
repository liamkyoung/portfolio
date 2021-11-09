import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

function resizeIframe (obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

function resume () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>Resume | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <div className='h-screen'>
        <Header />
        <div className='flex justify-center min-h-3/4 max-h-screen relative mt-10'>
          <iframe
            className='absolute'
            title='Resume'
            width='75%'
            height='100%'
            src='https://drive.google.com/file/d/1m85usoJdAmYiLqfYSQTUwA_8RRAokXKF/preview'
          />
        </div>
      </div>
    </div>
  )
}

export default resume
