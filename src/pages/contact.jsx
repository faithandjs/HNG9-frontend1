import React, { useState } from "react";

import check from "../assets/check.svg";

import "../styles/contact.scss";

export default function Contact() {
  const [text, setText] = useState("");
  const [agreed, setAgreed] = useState(false);

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
            required
            id='message'
            onClick={() =>
              setText(
                "Hey {name}, hope you are doing great. Let us collaborate on project xyz."
              )
            }
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Send a message and I'll respond as soon as possible..."></textarea>
        </div>
        <div className='check_box'>
          <span className={agreed ? "check" : ""}>
            <img src={check} alt='check mark' />
            <input
              type='checkbox'
              id='agree'
              required
              onChange={(e) => {
                setAgreed(e.target.checked);
              }}
            />
          </span>
          <label htmlFor='agree'>
            You agree to providing your data to faithandjs who may contact you
          </label>
        </div>
        <button type='submit' id='btn__submit'>
          Send Message
        </button>
      </form>
    </div>
  );
}
