import React from "react"

const smoothScroll = (element) => {
  let elmntToView = document.getElementById(element)
  elmntToView.scrollIntoView({ behavior: "smooth" })
}

function ScrollButton({ text, element }) {
  return (
    <h1 className='button' onClick={() => smoothScroll(element)}>
      {text}
    </h1>
  )
}

export default ScrollButton
