import React from 'react'
import Headshot from '../Headshot'
import Timer from '../about/Timer'

function MainContent () {
  return (
    <div className='bg-portfolio p-6 rounded-xl'>
      <div className='flex justify-center relative z-200 mb-16'>
        <h1 className='font-notable text-5xl'>ABOUT ME</h1>
      </div>
      <div className='mx-auto my-0 font-paytone text-center'>
        <div className='px-8'>
          <Headshot />
          <div className='pt-5'>
            <Timer />
          </div>
        </div><hr className='mt-5'/>
        <div className='mt-5'>
          <h1>I fell in love with computers AT THE AGE OF 5.</h1><br />
          <h1>I am excited to build a career where I can make</h1>
          <h1>A DIFFERENCE with my work.</h1><br />
          <h1>Currently a Junior at The University OF Florida</h1>
          <h1>WITH AN INTEREST IN SOFTWARE ENGINEERING.</h1><br />
          <h1>IF YOU WANT TO TALK TO A DETAIL-ORIENTED and EAGER DEVELOPER, PLEASE SEND ME A MESSAGE! I’d LOVE TO TALK.</h1>
        </div>
      </div>
    </div>
  )
}

export default MainContent
