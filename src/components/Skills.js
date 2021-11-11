import React from 'react'
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import CameraTwoToneIcon from '@mui/icons-material/CameraTwoTone';

function Skills () {
  return (
    <div className='flex justify-center'>
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
            <h3 className='skillDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, est nec sagittis elementum, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
          <div className='m-2'>
            <h1 className='font-notable text-2xl m-3'>Creativity</h1>
            <AutoFixHighTwoToneIcon className='skillIcons' />
            <h3 className='skillDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, est nec sagittis elementum, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
          <div className='m-2'>
            <h1 className='font-notable text-2xl m-3'>Photography</h1>
            <CameraTwoToneIcon className='skillIcons' />
            <h3 className='skillDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, est nec sagittis elementum, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Skills
