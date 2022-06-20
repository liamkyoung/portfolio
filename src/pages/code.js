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
    <div className='bg-portfolio-gray text-white min-h-screen'>
      <Head>
        <title>Code | LKY </title>
        <meta name='description' content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <MainBG />
      <Header />
      <SmallHeader />
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center content-center overflow-x-hidden relative h-screen'>
      {ProjectData.map((proj, i) => {
          return (
            <div key={i} className='flex justify-center mx-5 min-w-min'>
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
