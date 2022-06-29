import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { PhotoData } from '../../data/PhotoData'
import { ModalContext } from './ModalContext'

const LANDSCAPE_LARGE = 'col-span-1'
const LANDSCAPE_SMALL = 'col-span-1'

const PORTRAIT_LARGE = 'col-span-1'
const PORTRAIT_SMALL = 'col-span-1'

function Grid () {
  const { clicked, changeClicked } = useContext(ModalContext)
  const { image, changeImage } = useContext(ModalContext)
  // Landscape: w x h => 3 x 2
  // Portait: w x h => 2 x 3
  return (
    <div className='flex justify-center'>
      <div className='grid p-2 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 grid-flow-row-dense'>
        {PhotoData.map((photo, i) => {
          const imageSize = resizeImage(photo.type)
          return (
            <div key={i} className={imageSize + ' rounded-lg overflow-hidden w-full h-full'} >
              <Image
                src={photo.link + '-/preview/'}
                objectFit='cover'
                className='cursor-pointer rounded-lg w-full h-full hover:scale-125 transform duration-300 overflow-hidden object-center'
                alt='gallery-img'
                width='500px'
                height='500px'
                onClick={() => {
                  changeClicked(true)
                  changeImage(photo.name, photo.link)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function resizeImage(imageType) {
  if (imageType === 'pl')
    return PORTRAIT_LARGE
  else if (imageType === 'ps')
    return PORTRAIT_SMALL
  else if (imageType === 'll')
    return LANDSCAPE_LARGE
  
  return LANDSCAPE_SMALL
}

export default Grid
