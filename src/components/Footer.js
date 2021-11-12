import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import RightFooter from './RightFooter'

function Footer () {
  const form = useRef()
  const USER = process.env.USER
  const SERVICE = process.env.SERVICE
  const TEMPLATE = process.env.TEMPLATE

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE, TEMPLATE, form.current, USER)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className='bg-portfolio-ivory text-black text-bold min-h-full'>
      <h1 className='font-paytone text-4xl py-8 px-16'>Contact Me</h1>
      <div className='flex items-center'>
        <div className='mx-12 -my-7'>
          <form className='' ref={form} onSubmit={sendEmail}>
            <div className='flex mx-3'>
              <div className='m-5'>
                <h1 className='font-paytone'>name</h1>
                <input className='inputField' type='text' name='name' />
              </div>
              <div className='my-5 mx-10'>
                <h1 className='font-paytone'>e-mail</h1>
                <input className='inputField' type='email' name='user_email' />
              </div>
              <div className='mx-8 my-5'>
                <h1 className='font-paytone'>subject</h1>
                <input className='inputField' type='text' name='subject' />
              </div>
            </div>
            <div className='mx-8 my-5 max-w-2xl'>
              <h1 className='font-paytone'>message</h1>
              <textarea className='inputField min-w-full min-h-1/4' name='message' />
              <div className='flex justify-center'>
                <input className='button' type='submit' value='Submit' />
              </div>
            </div>
          </form>
        </div>
        <div className='border-l-4 border-portfolio-orange flex-auto'>
          <RightFooter />
        </div>
      </div>
    </div>
  )
}

export default Footer
