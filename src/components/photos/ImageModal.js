import React, { useContext } from 'react'
import { ModalContext } from './ModalContext'
import X from '@mui/icons-material/CancelOutlined'
import Gator from '../../../public/cartoon_gator.png'
import Image from 'next/image'

function ImageModal() {
  const { clicked, changeClicked } = useContext(ModalContext)
  const { image, changeImage } = useContext(ModalContext)
  return (
        <div className='imageModal z-50 w-3/4'>
            {
            clicked &&
              <div className='bg-portfolio bg-opacity-50 w-full min-h-3/4 p-2 lg:p-5 animate-fade-in'>
                <X className='text-2xl absolute top-5 left-5 cursor-pointer' onClick={() => changeClicked(false)} />
                <div className='flex justify-center items-center min-h-3/4'>
                  <div className='min-h-3/4 w-3/4 relative'>
                    <Image
                      src={image.link ? image.link + '-/quality/smart/600x600' : Gator}
                      objectFit='contain'
                      layout='fill'
                      alt={image.name}
                      className=''
                    />
                  </div>
                </div>
              </div>
            }
        </div>
  )
}

export default ImageModal