import React from 'react'
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone'
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone'
import CameraTwoToneIcon from '@mui/icons-material/CameraTwoTone'

function Skills () {
  return (
    <div className='flex justify-center mb-10'>
      <div className='text-center w-3/4'>
        <hr />
        <h1 className='sectionHeading'>Skills</h1>
        <hr />
        <div className='flex justify-between align-center m-6'>
          <div className='flex-col justify-center m-2'>
            <div className=''>
              <h1 className='font-notable text-2xl'>Web Design</h1>
              <h1 className='font-notable'>and Development</h1>
            </div>
            <DesktopWindowsTwoToneIcon className='skillIcons' />
            <h3 className='skillDesc'>I have been using React and other Javascript frameworks for a little over a year. Creating in web is a lot of fun for me and I love to focus on the details.</h3>
          </div>
          <div className='m-2'>
            <h1 className='font-notable text-2xl m-3'>Creativity</h1>
            <AutoFixHighTwoToneIcon className='skillIcons' />
            <h3 className='skillDesc'>Creativity powers my life and allows me to execute my ideas. Without my creativity and dedication, I would not be the person I am.</h3>
          </div>
          <div className='m-2'>
            <h1 className='font-notable text-2xl m-3'>Photography</h1>
            <CameraTwoToneIcon className='skillIcons' />
            <h3 className='skillDesc'>I was taught how to use a camera in high-school and ever since, I get thrilled when I pick up the camera and shoot. I take pictures of landscapes, headshots, and LOVE astrophotography.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
