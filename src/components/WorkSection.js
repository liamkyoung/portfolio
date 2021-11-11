import React from 'react'
import Project from '../components/Project'
import GatorPic from '../../public/gator.png'

function WorkSection () {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4'>
        <h1 className='sectionHeading text-center'>Featured Work</h1>
        <hr />
        <Project
          image={GatorPic}
          title='Example Title'
          frameworks='React, D3.js, ...'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, est nec sagittis elementum, eros dolor pharetra tellus, ut sollicitudin diam nisi nec turpis.'
          code='https://github.com/liamkyoung/pse'
          site='https://liamkyoung.github.io/'
          video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
        />
        <Project
          image={GatorPic}
          title='Example Title'
          frameworks='React, D3.js, ...'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, est nec sagittis elementum, eros dolor pharetra tellus, ut sollicitudin diam nisi nec turpis.'
          code='https://github.com/liamkyoung/pse'
          site='https://liamkyoung.github.io/'
          video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
        />
        <div className='flex justify-center m-12'>
          <h1 className='button'>See All Projects</h1>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
