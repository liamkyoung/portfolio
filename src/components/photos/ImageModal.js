import React, { useContext } from 'react'
import { ModalContext } from './ModalContext'

function ImageModal() {
  const { clicked, changeClicked } = useContext(ModalContext)
  return (
        <div className='absolute top-0 left-0 bg-portfolio opacity-80 h-screen w-full z-200' onClick={() => changeClicked(false)}>
            {
            clicked &&
              <div className='flex justify-center items-center'>
                <h1 onClick={() => changeClicked(true)}>Example Image</h1>
              </div>
            }
        </div>
  )
}

export default ImageModal