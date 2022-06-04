import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { PhotoData } from '../../data/PhotoData'
import { ModalContext } from './ModalContext'

const LANDSCAPE_LARGE = 'row-span-4 col-span-6'
const LANDSCAPE_SMALL = 'row-span-2 col-span-3'

const PORTRAIT_LARGE = 'row-span-6 col-span-4'
const PORTRAIT_SMALL = 'row-span-3 col-span-2'
function Grid () {
  const { clicked, changeClicked } = useContext(ModalContext)
  // Landscape: w x h => 3 x 2
  // Portait: w x h => 2 x 3
  return (
    <div className='flex w-3/4 justify-center'>
      <div className='photoGrid grid-cols-6 lg:grid-cols-9 2xl:grid-cols-12 p-2 gap-2 grid-flow-row-dense'>
        {PhotoData.map((photo, i) => {
          const imageSize = resizeImage(photo.type)
          return (
            <div key={i} className={imageSize + ' rounded-lg'} >
              <Image
                src={photo.link}
                objectFit='cover'
                className='w-full h-full overflow-hidden cursor-pointer rounded-lg'
                alt='gallery-img'
                onClick={() => changeClicked(true)}
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
