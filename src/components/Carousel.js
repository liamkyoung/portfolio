import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PhotoData from '../data/PhotoData'
import GatorPic from '../../public/gator.png'
import Image from 'next/image'

import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectFade, Navigation, Pagination])

// Should be uploading all images to an S3 Bucket to use. For now I'll keep them in the public folder.
function Carousel () {
  return (
    <div className='flex justify-center'>
      <Swiper
        slidesPerView='auto'
        spaceBetween={30}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-1'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex justify-center flex-shrink-2'>
            <Image height={300} width={300} src={GatorPic} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
