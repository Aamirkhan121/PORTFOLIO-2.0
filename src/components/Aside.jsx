import React, { useState } from 'react'
import Img from '/images/imran-abbas.png'
import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";


const Aside = () => {
  const[showContacts,setShowContacts]=useState(false)
  const toggleContact=()=>{
    setShowContacts(!showContacts)
  }
  return (
    <aside className='sidebar'>
      <div className='sidebar-info'>
        <figure className='avtar-box'>
        {/* <img style={{background:'lightgreen', borderRadius:'10%'}} src={Img} alt="" width='100' /> */}
        </figure>
        <div className='info-content'>
          <h1 className='name'>Md Aamir khan</h1>
          <p className='title'>MERN-STACK Developer</p>
        </div>
        <button className='info_more-btn' onClick={toggleContact}>
          <span>Show contacts</span>
          <GiClawSlashes/>
        </button>
      </div>

      {/* Contact info */}

      <div className={`sidebar-info_more ${showContacts? 'show-contacts':''}`}>
        <hr className='separator2' />
        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'> 
<GiMailbox/>
            </div>
            <div className="contact-info">
              <p className="contact-title" style={{color:'black'}}>EMAIL</p>
              <a href="mailto:aamir73690@gmail.com" className="contact-link">aamir73690@gmail.com</a>
            </div>
          </li>
          <li className='contact-item'>
            <div className='icon-box'> 
<GiPhone/>
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:+91 7369041570" className="contact-link">+91 9785672970</a>
            </div>
          </li>
          <li className='contact-item'>
            <div className='icon-box'> 
<GiCalendar/>
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time date="2004-12-01" className="contact-link">Dec 01, 2004</time>
            </div>
          </li>
          <li className='contact-item'>
            <div className='icon-box'> 
<FaMapMarkerAlt/>
            </div>
            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <address>Govindpur (DHANBAD), Jharkhand,INDIA</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside
