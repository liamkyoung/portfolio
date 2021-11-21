import React from 'react'
import MainBGSVG from './svgs/MainBGSVG'
import MainBGAccent from './svgs/MainBGAccent'

function MainBG () {
  return (
    <div>
      <div className='relative'>
        <div className='absolute top-0 left-0 z-150 h-screen min-w-full'>
          <MainBGSVG />
        </div>
        <div className='absolute top-0 left-0 z-200 min-w-full'>
          <MainBGAccent />
        </div>
      </div>
    </div>
  )
}

export default MainBG
