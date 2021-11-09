import Head from 'next/head'
import Header from '../components/Header'
import Title from '../components/Title'
import Buttons from '../components/Buttons'
import Gator from '../components/Gator'
import BgSVG from '../components/BgSVG'
import Skills from '../components/Skills'
import WorkSection from '../components/WorkSection'
import PhotographySection from '../components/PhotographySection'
// import Image from 'next/image'
// import BGSVG from '../../public/bg.svg'
// <Gator />

export default function Home () {
  return (
    <div className='bg-portfolio min-h-screen text-white'>
      <Head>
        <title>Home | LKY </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
      </Head>
      <BgSVG />
      <Header />
      <div className='relative z-20 flex items-center justify-center'>
        <div className='mx-10 my-32'>
          <Title />
          <div className='flex'>
            <hr className='m-6 w-1/2' />
          </div>
          <Buttons />
        </div>
        <Gator />
      </div>
      <div className='relative z-100'>
        <Skills />
        <WorkSection />
        <PhotographySection />
      </div>
    </div>
  )
}
