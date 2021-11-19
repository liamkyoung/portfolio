import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PhotoData } from '../data/PhotoData'
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
        slidesPerView='3'
        spaceBetween={30}
        navigation
        loop
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        {PhotoData.map((photo, i) => {
          return (
            <SwiperSlide key={i} className=''>
              <div className=''>
                <Image
                  src={photo.link}
                  height={500}
                  width={700}
                  objectFit='contain'
                  className=''
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
