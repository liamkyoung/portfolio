import React, { useState } from 'react'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false)
    const [image, setImage] = useState(
        {
            name: "", 
            link: ""
        }
    )

    const changeImage = (name, link) => {
        setImage({name: name, link: link})
        console.log(image)
    }

    const changeClicked = (value) => {
        setClicked(value)
        console.log(value)
    }


    return (
        <ModalContext.Provider value={{ clicked, image, changeImage, changeClicked }}>
            {children}
        </ModalContext.Provider>
    )
}