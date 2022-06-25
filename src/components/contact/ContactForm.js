import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function ContactForm () {
  const form = useRef()
  const USER = process.env.NEXT_PUBLIC_USER
  const SERVICE = process.env.NEXT_PUBLIC_SERVICE
  const TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE

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
    <div className='lg:text-left'>
      <form className='' ref={form} onSubmit={sendEmail}>
        <div className='flex-col md:flex-row flex -mx-5 lg:mx-3 items-start max-w-full'>
          <div className='m-5 flex-auto w-full md:w-1/2'>
            <h1 className='font-paytone'>name</h1>
            <input className='inputField' type='text' name='name' />
          </div>
          <div className='my-5 mx-5 lg:mx-10 flex-auto w-full md:w-1/2'>
            <h1 className='font-paytone'>e-mail</h1>
            <input className='inputField' type='email' name='user_email' />
          </div>
          <div className='mx-5 lg:mx-8 my-5 flex-auto w-full md:w-1/2'>
            <h1 className='font-paytone'>subject</h1>
            <input className='inputField' type='text' name='subject' />
          </div>
        </div>
        <div className='m-0 lg:my-5 w-full'>
          <h1 className='font-paytone ml-1'>message</h1>
          <textarea className='inputField w-full min-h-1/4 resize-none flex justify-center' name='message' />
          <div className='flex justify-center  lg:-mx-7'>
            <input className='alt-button' type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
