import React from 'react'
import Image from 'next/image'
import { PhotoData } from '../../data/PhotoData'

function Grid () {
  return (
    <div className='flex w-3/4 justify-center'>
      <div className='photoGrid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-2 gap-5 hover:'>
        {PhotoData.map((photo, i) => {
          return (
            <div key={i} className={photo.gridType + ''}>
              <Image
                src={photo.link}
                objectFit='cover'
                className='w-full h-full overflow-hidden cursor-pointer hover:border-portfolio-ivory border-2'
                alt='gallery-img'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Grid
