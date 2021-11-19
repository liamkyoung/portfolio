import React from 'react'
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone'

function WebDevelopment () {
  return (
    <div className='flex-col justify-center m-2'>
      <div className=''>
        <h1 className='font-notable text-2xl'>Web Design</h1>
        <h1 className='font-notable'>and Development</h1>
      </div>
      <DesktopWindowsTwoToneIcon className='skillIcons' />
      <h3 className='skillDesc'>I have been using React and other Javascript frameworks for a little over a year. Creating in web is a lot of fun for me and I love to focus on the details.</h3>
    </div>
  )
}

export default WebDevelopment
