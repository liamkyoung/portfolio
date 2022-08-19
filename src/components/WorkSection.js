import React from "react"
import Link from "next/link"
import Project from "../components/Project"
import ExamplePic from "../../public/photos/gamesorter.PNG"
import { ProjectData } from "../data/ProjectData"
import WorkRightSVG from "./backgrounds/svgs/WorkRightSVG"
import WorkLeftSVG from "./backgrounds/svgs/WorkLeftSVG"

function WorkSection() {
  return (
    <div id='projects' className='flex justify-center relative'>
      <WorkLeftSVG />
      <WorkRightSVG />
      <div className='w-3/4 z-100 relative'>
        <hr className='sectionHR' />
        <h1 className='sectionHeading text-center'>Featured Work</h1>
        <hr className='sectionHR' />
        {ProjectData.map((proj, i) => {
          if (i > 2) return

          return (
            <div key={i} className='flex justify-center'>
              <Project
                title={proj.title}
                frameworks={proj.frameworks}
                desc={proj.desc}
                site={proj.site}
                code={proj.code}
                video={proj.video}
                image={proj.image}
              />
            </div>
          )
        })}
        <div className='flex justify-center m-12'>
          <Link href='/code' passHref>
            <h1 className='button'>See All Projects</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
