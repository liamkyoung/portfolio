import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PhotoData } from '../../data/PhotoData'
import Image from 'next/image'

import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectFade, Navigation, Pagination])

const getPhotos = () => {
  const PHOTO_LIMIT = 5
  let featuredPhotos = new Set()
  for (let i = 0; i < PHOTO_LIMIT; i++) {
    const chosenIndex = Math.floor(Math.random()*PhotoData.length)
    const photo = PhotoData[chosenIndex]

    !featuredPhotos.has(photo) ? featuredPhotos.add(photo) : i--
  }

  return Array.from(featuredPhotos)
}

// Should be uploading all images to an S3 Bucket to use. For now I'll keep them in the public folder.
function Carousel () {
  return (
    <div className='flex justify-center'>
      <Swiper
        spaceBetween={30}
        loop
        pagination={{ clickable: true }}
        className='mySwiper'
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {getPhotos().map((photo, i) => {
          return (
            <SwiperSlide key={i} className=''>
              <div className='hover:opacity-90 rounded-full'>
                <Image
                  src={photo.link + '-/preview/'}
                  height={900}
                  width={900}
                  objectFit='contain'
                  alt='image'
                  className='rounded-3xl'
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
