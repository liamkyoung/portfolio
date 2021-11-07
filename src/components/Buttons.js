import React from 'react'

function Buttons () {
  return (
    <div className='flex text-black mt-12 items-start'>
      <h1 className='button'>All Photos</h1>
      <h1 className='button'>All Projects</h1>
      <div>
        <h1 className='button hover:font-bold'>Contact</h1>
        <h2 className='text-portfolio-red text-sm font-bold'>*looking for work!</h2>
      </div>
    </div>
  )
}

export default Buttons
