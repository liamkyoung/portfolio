import React from 'react'
import Link from 'next/link'
import ScrollButton from '../contact/ScrollButton'
import SouthRoundedIcon from '@mui/icons-material/SouthRounded'

function Buttons() {
  return (
    <div className='flex text-black items-start md:justify-start justify-center animate-fade-in-down'>
      <ScrollButton text='Who is Liam?' element='home_about_above' />
      <ScrollButton text='Featured Work' element='projects' />
      <ScrollButton text='Featured Photos' element='photos' />
    </div>
  )
}

export default Buttons
