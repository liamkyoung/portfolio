import React from 'react'

const smoothScroll = (element) => {
  let elmntToView = document.getElementById(element)
  elmntToView.scrollIntoView({ behavior: 'smooth' })
}

function ScrollButton({ text, element }) {
  return (
    <div className='' onClick={() => smoothScroll(element)}>
      <h1 className='button'>{text}</h1>
      {/* <h1 className='absolute top-0 -right-28 font-secular text-portfolio-red'>*Open for work!</h1> */}
    </div>
  )
}

export default ScrollButton
