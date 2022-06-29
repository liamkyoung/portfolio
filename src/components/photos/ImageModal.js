import React, { useContext } from 'react'
import { ModalContext } from './ModalContext'
import X from '@mui/icons-material/CancelOutlined'
import Gator from '../../../public/cartoon_gator.png'
import Image from 'next/image'
import Link from 'next/link'

function ImageModal() {
  const { clicked, changeClicked } = useContext(ModalContext)
  const { image, changeImage } = useContext(ModalContext)
  return (
        <div className='imageModal z-50 w-3/4'>
            {
            clicked &&
              <div className='bg-portfolio bg-opacity-90 p-2 lg:p-5 animate-fade-in-down ease-out'>
                <X className='text-2xl absolute top-5 left-5 cursor-pointer' onClick={() => changeClicked(false)} />
                <div className='flex justify-center items-center min-h-3/4'>
                  <div className='min-h-3/4 w-3/4 relative'>
                    <a href={image?.link} target='_blank' rel='noreferrer'>
                      <Image
                        src={image.link ? image.link + '-/preview/' : Gator}
                        objectFit='contain'
                        layout='fill'
                        alt={image.name}
                        className=''
                      />
                    </a>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <a href={image?.link} target='_blank' rel='noreferrer'>
                   <div className='button'>See Full Image</div>
                  </a>
                </div>
              </div>
            }
        </div>
  )
}

export default ImageModal