import React from 'react'
import Link from 'next/link'
import Left from '../../public/backgrounds/left2.svg'
import Right from '../../public/backgrounds/right2.svg'
import Image from 'next/image'
import Project from '../components/Project'
import GatorPic from '../../public/photos/gator.png'
import { ProjectData } from '../data/ProjectData'

function WorkSection () {
  return (
    <div className='flex justify-center'>
      <div className='z-0'>
        <Image
          src={Left}
          height={1600}
          width={300}
          objectFit='contain'
          className='min-h-3/4'
        />
      </div>
      <div className='w-3/4'>
        <hr className='sectionHR' />
        <h1 className='sectionHeading text-center'>Featured Work</h1>
        <hr className='sectionHR' />
        {ProjectData.map((proj, i) => {
          return (
            <Project
              key={i}
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
          <Link href='/code'><h1 className='button'>See All Projects</h1></Link>
        </div>
      </div>
      <div className='z-0'>
        <Image
          src={Right}
          height={1600}
          width={300}
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default WorkSection
