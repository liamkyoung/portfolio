import React from 'react'
import CameraTwoToneIcon from '@mui/icons-material/CameraTwoTone'

function Photography () {
  return (
    <div className='flex-col justify-center m-2 max-w-sm'>
      <h1 className='font-notable text-2xl m-3'>Photography</h1>
      <CameraTwoToneIcon className='skillIcons' />
      <div className='mb-10'>
        <h3 className='skillDesc'>I was taught how to use a camera in high-school and ever since, I get thrilled when I pick up the camera and shoot. I take pictures of landscapes, headshots, and LOVE astrophotography.</h3>
      </div>
    </div>
  )
}

export default Photography
