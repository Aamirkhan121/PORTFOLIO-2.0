import React, { useState } from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyAj94F_MsAstZV5iwGFkiYRETDE59FUTeY",
    authDomain: "portfolio-77537.firebaseapp.com",
    databaseURL: "https://portfolio-77537-default-rtdb.firebaseio.com",
    projectId: "portfolio-77537",
    storageBucket: "portfolio-77537.appspot.com",
    messagingSenderId: "149318038814",
    appId: "1:149318038814:web:dd2725e2d0a2fd7122450f",
    measurementId: "G-WZD9XDMWBZ",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageRef=firebase.database().ref('messages');
    const newMessageRef=messageRef.push();
    newMessageRef.set({
        fullName:fullName,
        email:email,
        message:message,
    }).then(()=>{
        setFullName('');
        setEmail('');
        setMessage('');
        alert('Message Send Successfully')
    }).catch((error)=>{
        console.error("Error message not send:",error)
        alert("Error -: Please try again :(")
    })
  };

  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116814.76362517018!2d86.35184766309072!3d23.802187789494027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a30804ccfc6d%3A0xfa151e1b85f764e7!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1713678562806!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullname"
              className="form-input"
              placeholder="FullName"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="form-input"
              placeholder="Email-address"
            />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input"
            placeholder="Your Message"
          ></textarea>
          <button className="form-btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
