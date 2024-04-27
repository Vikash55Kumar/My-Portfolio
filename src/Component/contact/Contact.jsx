import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Contact.css"
import vikash from '../../assets/contact.jpg'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_shadr0o', 'template_mj7rlbd', form.current, {
            publicKey: '1lLqxXQzpAmFXx1Sk',
          })
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              e.target.reset();
              alert("Form submit successfully");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <>
            <section id="contact">
                <div className="clientContact">
                    <span className="title1">Let's Connect</span>
                    <span className="description1">Please fill out the form to contact to me for ant discussion</span>
                    <div className="form">
                        <div className="clintImgs">
                            <img src={vikash} alt="" className="clintImg" />
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="ClientForm">
                            <TextField
                                className='forms'
                                id="name"
                                name='your_name'
                                required
                                label="Name"
                                placeholder="Your Name"
                            />
                            <TextField
                                className='forms'
                                id="email"
                                name='your_email'
                                required
                                label="Email"
                                placeholder="Your email"
                            />
                            <TextField
                                className='forms'
                                id='message'
                                name='message'
                                required
                                label="Message" multiline rows={3}
                                placeholder='Your message'
                            />
                            <Button variant="contained" className="submit-btn" type="submit" value="Send">Submit</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
  )
}
