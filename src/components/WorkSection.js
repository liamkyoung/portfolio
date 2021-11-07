import React from 'react'
import Project from '../components/Project'
import GatorPic from '../../public/gator.png'

function WorkSection () {
  return (
    <div>
      <h1 className='m-5 font-bold text-2xl text-center'>Featured Work</h1>
      <hr />
      <Project
        image={GatorPic}
        title='Example Title'
        frameworks='React, D3.js, ...'
        desc='Lorem Ipsum DUIAGDUIAGD*AIUGF*IUAFGIAFIDGIUFGDIFGIDGIUGFUGISGIFGIDSGFISGB'
        code='https://github.com/liamkyoung/pse'
        site='https://liamkyoung.github.io/'
        video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
      />
      <hr />
      <Project
        image={GatorPic}
        title='Example Title'
        frameworks='React, D3.js, ...'
        desc='Lorem Ipsum DUIAGDUIAGD*AIUGF*IUAFGIAFIDGIUFGDIFGIDGIUGFUGISGIFGIDSGFISGB'
        code='https://github.com/liamkyoung/pse'
        site='https://liamkyoung.github.io/'
        video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
      />
      <hr />
      <div className='flex items-center'>
        <div className='button text-center max-w-sm justify-center align-center'>See all Projects.</div>
      </div>
    </div>
  )
}

export default WorkSection
