import React from 'react'
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone'

function Creativity () {
  return (
    <div className='flex-col justify-center m-2 max-w-sm'>
      <h1 className='font-notable text-2xl m-3 text-center'>Creativity</h1>
      <AutoFixHighTwoToneIcon className='skillIcons' />
      <div className='mb-10'>
        <h3 className='skillDesc'>Creativity powers my life and allows me to execute my ideas. Without my creativity and dedication, I would not be the person I am.</h3>
      </div>
    </div>
  )
}

export default Creativity
