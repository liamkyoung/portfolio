import React from 'react'
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone'

function Design () {
  return (
    <div className='skillWrapper'>
      <h1 className='font-notable text-2xl m-3 text-center'>Design</h1>
      <AutoFixHighTwoToneIcon className='skillIcons' sx={{ fontSize: '4rem' }} />
      <div className='mb-10'>
        <h3 className='skillDesc'>
            I've fallen in love with designing applications and harnessing my inner child to draw and express myself. 
            I enjoy wielding my creativity to make others happy and make meaningful art.
        </h3>
      </div>
    </div>
  )
}

export default Design
