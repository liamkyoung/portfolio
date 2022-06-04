import React, { useState } from 'react'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false)
    const [imageName, setImageName] = useState('')
    const [imageLink, setImageLink] = useState('')

    const changeImage = (name, link) => {
        setImageName(name)
        setImageLink(link)
    }

    const changeClicked = (value) => {
        setClicked(!clicked)
        console.log(clicked)
    }


    return (
        <ModalContext.Provider value={{ clicked, imageName, imageLink, changeImage, changeClicked }}>
            {children}
        </ModalContext.Provider>
    )
}