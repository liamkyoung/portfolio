import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function Footer () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_xjs4mla', 'default_template', form.current, 'user_jJGHnayMFxkmlJztsbTz9')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className='bg-portfolio-ivory text-black text-bold h-96'>
      <h1 className='font-paytone text-4xl py-8 px-16'>Contact Me</h1>
      <div className=''>
        <form className='' ref={form} onSubmit={sendEmail}>
          <div className='flex mx-3'>
            <div className='m-5'>
              <h1 className=''>name</h1>
              <input className='inputField' type='text' name='name' />
            </div>
            <div className='my-5 mx-10'>
              <h1 className=''>e-mail</h1>
              <input className='inputField' type='email' name='user_email' />
            </div>
          </div>
          <div className='mx-5 my-5'>
            <h1 className=''>subject</h1>
            <input className='inputField' type='text' name='subject' />
          </div>
          <div className='m-5'>
            <h1 className=''>message</h1>
            <textarea className='inputField' name='message' />
          </div>
          <div>
            <input className='button' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
