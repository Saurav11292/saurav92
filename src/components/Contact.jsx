import { useState } from 'react';
import React from 'react';
import './Contact.scss';
import Image from '../asset/Jan03.jpg';

export default function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contactcontainer' id='contact'>
      <div className="left">
        <img src= {Image} alt="not found" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='E-mail' />
          <textarea placeholder='Message'></textarea>
          <button type='Submit'>Send</button>
          {message && <span>Thanks, I will reply soon </span>}
        </form>
      </div>
    </div>
  )
}
