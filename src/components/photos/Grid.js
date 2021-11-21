import React from 'react'
import Image from 'next/image'
import { PhotoData } from '../../data/PhotoData'

function Grid () {
  return (
    <div className='photoGrid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-2 gap-5'>
      {PhotoData.map((photo, i) => {
        return (
          <div className={photo.gridType}>
            <Image
              src={photo.link}
              objectFit='cover'
              className='w-full h-full'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Grid
