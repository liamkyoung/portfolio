import React from 'react'
import Header from '../components/Header'

function resizeIframe (obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

function resume () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Header />
      <iframe
        title='Resume'
        width='100%'
        height='766px'
        src='https://drive.google.com/file/d/1m85usoJdAmYiLqfYSQTUwA_8RRAokXKF/preview'
      />
    </div>
  )
}

export default resume
