import React from "react";
import "../styles/contact.scss";

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='input_box_full'>
          <div className='input_box_half input_box'>
            <label htmlFor='first_name'>First Name</label>
            <input
              type='text'
              id='first_name'
              placeholder='Enter your first name'
              required
            />
          </div>
          <div className='input_box_half input_box'>
            <label htmlFor='last_name'>Last Name</label>
            <input
              type='text'
              id='last_name'
              placeholder='Enter your last name'
              required
            />
          </div>{" "}
        </div>
        <div className='input_box'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='yourname@email.com'
            required
          />
        </div>
        <div className='input_box'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            placeholder="Send a message and I'll respond as soon as possible..."></textarea>
        </div>
        <div className='check_box'>
          <input type='checkbox' id='agree' required />
          <label htmlFor='agree'>
            You agree to providing your data to faithandjs who may contact you
          </label>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}
