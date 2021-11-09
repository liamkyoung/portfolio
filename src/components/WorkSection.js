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
      <div className='flex justify-center m-5'>
        <h1 className='button'>See all Projects.</h1>
      </div>
      <hr />
    </div>
  )
}

export default WorkSection
