import React from 'react'
import WebDevelopment from './skills/WebDevelopment'
import Creativity from './skills/Creativity'
import Photography from './skills/Photography'

function Skills () {
  return (
    <div className='flex justify-center mb-10'>
      <div className='text-center w-3/4'>
        <hr className='sectionHR' />
        <h1 className='sectionHeading'>Skills</h1>
        <hr className='sectionHR' />
        <div className='md:flex md:justify-between md:align-center m-8'>
          <WebDevelopment />
          <Creativity />
          <Photography />
        </div>
      </div>
    </div>
  )
}

export default Skills
