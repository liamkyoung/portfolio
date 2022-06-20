import React from 'react'
import CameraTwoToneIcon from '@mui/icons-material/CameraTwoTone'

function Photography () {
  return (
    <div className='skillWrapper'>
      <h1 className='font-notable text-2xl m-3 text-center'>Photography</h1>
      <CameraTwoToneIcon className='skillIcons' sx={{ fontSize: '4rem' }} />
      <div className='mb-10'>
        <h3 className='skillDesc'>I was taught how to use a camera in high-school and ever since, I get thrilled when I pick up the camera and shoot. I photograph landscapes, people, and the stars.</h3>
      </div>
    </div>
  )
}

export default Photography
