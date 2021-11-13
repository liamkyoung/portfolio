import React from 'react'
import Project from '../components/Project'
import GatorPic from '../../public/gator.png'
import { ProjectData } from '../data/ProjectData'

function WorkSection () {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4'>
        <h1 className='sectionHeading text-center'>Featured Work</h1>
        <hr />
        {console.log(ProjectData)}
        {ProjectData.map(proj => {
          return (
            <Project
              title={proj.title}
              frameworks={proj.frameworks}
              desc={proj.desc}
              site={proj.site}
              code={proj.code}
              video={proj.video}
              image={GatorPic}
            />
          )
        })}
        <div className='flex justify-center m-12'>
          <h1 className='button'>See All Projects</h1>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
