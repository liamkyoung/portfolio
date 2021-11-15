import Head from 'next/head'
import Header from '../components/Header'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Buttons from '../components/Buttons'
import Gator from '../components/Gator'
import BgSVG from '../components/BgSVG'
import BgSVG1 from '../components/BgSVG1'
import Skills from '../components/Skills'
import WorkSection from '../components/WorkSection'
import PhotographySection from '../components/PhotographySection'
import Footer from '../components/Footer'
import HomeAbout from '../components/HomeAbout'
import Drip from '../components/Drip'

export default function Home () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white overflow-hidden flex flex-col flex-auto'>
      <Head>
        <title>Home | LKY </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <BgSVG />
      <Header />
      <div className='mb-16 justify-center lg:justify-start relative z-20 flex items-center'>
        <div className='m-6 md:m-12 lg:m-32'>
          <Title />
          <SubTitle />
          <Buttons />
        </div>
      </div>
      <div className='relative z-100'>
        <HomeAbout />
        <Drip />
        <Skills />
        <WorkSection />
        <PhotographySection />
        <Footer />
      </div>
    </div>
  )
}
