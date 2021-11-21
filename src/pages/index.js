import Head from 'next/head'
import Header from '../components/Header'
import TitlePage from '../components/TitlePage'
import BgSVG from '../components/backgrounds/BgSVG'
import MainBG from '../components/backgrounds/MainBG'
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap' rel='stylesheet' />
      </Head>

      <div className='mainBGImage h-screen mb-32'>
        <MainBG />
        <Header />
        <TitlePage />
      </div>

      <section className='relative z-102'>
        <HomeAbout />
      </section>
      <div className='relative'>
        <Drip />
      </div>

      <section className='m-20 relative z-100'>
        <Skills />
      </section>

      <section className='relative z-100'>
        <WorkSection />
        <PhotographySection />
      </section>

      <section className='relative z-100'>
        <Footer />
      </section>
    </div>
  )
}
