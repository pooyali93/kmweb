import { useState } from 'react';
import './Contact.scss'

export default function Contact() {

  const [message, setMessage] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/c1.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Let's chat.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Full name' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you, I'll be in touch shortly :) </span>}
        </form>
      </div>
    </div>
  )
}
