import Head from 'next/head'
import Header from '../components/Header'
import TitlePage from '../components/TitlePage'
import MainBG from '../components/backgrounds/MainBG'
import Skills from '../components/Skills'
import WorkSection from '../components/WorkSection'
import PhotographySection from '../components/PhotographySection'
import Footer from '../components/Footer'
import HomeAbout from '../components/HomeAbout'
import Drip from '../components/Drip'
import HomeAboutSVG from '../components/backgrounds/svgs/HomeAboutSVG'
import SmallHeader from '../components/SmallHeader'


export default function Home () {
  return (
    <div className='bg-portfolio-gray min-h-screen text-white overflow-hidden flex flex-col'>
      <Head>
        <title>Home | LKY </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Notable&family=Paytone+One&family=Reem+Kufi:wght@500&display=swap' rel='stylesheet' />
      </Head>

      <div id='main_page' className='h-screen'>
        <MainBG />
        <Header />
        <SmallHeader />
        <TitlePage />
      </div>

      <section id='home_about' className='relative my-32 h-96 md:mt-48 lg:mt-0'>
        <HomeAbout />
        <HomeAboutSVG />
      </section>

      <div id='drip' className='relative h-96 -mb-60 md:mb-0'>
        <Drip />
      </div>

      <section id='skills' className='relative z-100'>
        <Skills />
      </section>

      <section id='work_and_photos' className='relative z-100'>
        <WorkSection />
        <PhotographySection />
      </section>

      <section id='footer' className='relative z-100'>
        <Footer />
      </section>
    </div>
  )
}
