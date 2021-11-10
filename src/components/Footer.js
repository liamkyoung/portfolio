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
      <h1>Contact Me</h1>
      <div className='flex-col'>
        <form className='' ref={form} onSubmit={sendEmail}>
          <div className='m-5'>
            <label className='mx-5'>Name</label>
            <input className='inputField' type='text' name='name' />
          </div>
          <div className='m-5'>
            <label className='mx-5'>Email</label>
            <input className='inputField' type='email' name='user_email' />
          </div>
          <div className='m-5'>
            <label className='mx-5'>Subject</label>
            <input className='inputField' type='text' name='subject' />
          </div>
          <div className='flex-grow m-5'>
            <label className='mx-5'>Message</label>
            <textarea className='inputField' name='message' />
          </div>
          <div>
            <input className='button' type='submit' value='Send' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
