import React from 'react'
import Headshot from '../Headshot'
import Timer from '../about/Timer'

function MainContent () {
  return (
    <div className='bg-portfolio p-6 rounded-xl mx-5'>
      <div className='flex justify-center relative z-200 mb-16'>
        <h1 className='font-notable text-5xl'>ABOUT ME</h1>
      </div>
      <div className='flex mx-auto my-0 font-paytone text-left'>
        <div className='px-8'>
          <Headshot />
          <div className='pt-5'>
            <Timer />
          </div>
        </div>
        <div className='mt-5 border-l-2 px-8 text-sm'>
          <h1>I&apos;m an eager and down-to-earth developer ready to pounce on exciting opprotunities!</h1><br />
          <h1>Send me a message if you&apos;d like to connect.</h1>
        </div>
      </div>
    </div>
  )
}

export default MainContent
