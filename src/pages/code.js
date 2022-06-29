import React from 'react'
import Head from 'next/head'
import WorkSection from '../components/WorkSection'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'
import BgSVG from '../components/backgrounds/BgSVG'
import { ProjectData } from '../data/ProjectData'
import Project from '../components/Project'
import ExamplePic from '../../public/photos/gamesorter.PNG'
import MainBGSVG from '../components/backgrounds/svgs/MainBGSVG'
import MainBG from '../components/backgrounds/MainBG'

function Code () {
  return (
    <div className='bg-portfolio-gray text-white min-h-screen overflow-hidden'>
      <Head>
        <title>Code | LKY </title>
        <meta name='description' content="LKY's Website" />
      </Head>
      <MainBG />
      <Header />
      <SmallHeader />
      <div className='grid grid-cols-1 lg:grid-cols-2 content-center overflow-x-hidden relative pt-32'>
      {ProjectData.map((proj, i) => {
          return (
            <div key={i} className='flex justify-center mx-5 lg:mx-2'>
              <Project
                title={proj.title}
                frameworks={proj.frameworks}
                desc={proj.desc}
                site={proj.site}
                code={proj.code}
                video={proj.video}
                image={ExamplePic}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Code
