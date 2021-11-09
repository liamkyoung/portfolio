import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PhotoData from './PhotoData'
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
    <div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
        <SwiperSlide><Image height={300} width={300} src={GatorPic} /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
