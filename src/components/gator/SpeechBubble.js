import React from 'react'

function SpeechBubble() {
  return (
    <div id='home_about_div' className='relative max-w-xl font-reem text-xl mx-10 text-center lg:text-left bg-portfolio bg-opacity-90 p-4 rounded-md'>
      <div className='speechTriangleLeft opacity-0 lg:opacity-90' />
      <div className='speechTriangleBottom opacity-90 lg:opacity-0' />
        <h1 className='mb-3 text-center text-2xl'>Hello!</h1> 
        <h1>My name is <b>Liam Kingston Young</b> and I am a 4th Year Computer Science student at the University of Florida</h1>
        <h1>and a self-taught web developer.</h1><br></br>
        <h1>Check out some of my projects down below!</h1>
    </div>
  )
}

export default SpeechBubble