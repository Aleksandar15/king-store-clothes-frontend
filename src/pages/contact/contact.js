import React from 'react';
import './contact.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactPage() {

  return (
    <div className="form">
      <h1>CONTACT US</h1><br/>
      <div className="formInput">
        <input type="text" placeholder="Name"/>
      </div>
      <div className="formInput">
        <input type="email" placeholder="Email Address"/>
      </div>
      <div className="formInput">
        <input type="text" placeholder="Subject"/>
      </div>
      <div className="formMessage">
        <textarea placeholder="Your message"></textarea>
      </div>
      <button onClick={()=>{ alert('Page Maintenance!')}} className="button"type="submit">
        Send Message
      </button>
    <p>*Under construction!</p>
    </div>
  )
}