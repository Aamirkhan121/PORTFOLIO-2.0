import React, { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

const servicesData=[
  // {
  //   "title": "Web design",
  //   "icon": "/images/icon-design.svg",
  //   "description": "The most modern and high-quality design made at a professional level."
  // },
  {
    "title": "Front-end Developer",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the fresher level."
  },
  // {
  //   "title": "Mobile apps",
  //   "icon": "/images/icon-app.svg",
  //   "description": "Professional development of applications for iOS and Android."
  // },
  // {
  //   "title": "Photography",
  //   "icon": "/images/icon-photo.svg",
  //   "description": "I make high-quality photos of any category at a professional level."
  // }
]


const About = () => {
  const[testimonials,setTestimonials]=useState([])
  useEffect(()=>{
    fetch('testimonials.json').then(res=>res.json()).then(data=>{
      console.log(data)
      setTestimonials(data)
    })
  },[])
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section>
        <p>
          As a fresh front-end developer, I bring a passion for crafting
          visually appealing and user-friendly websites using HTML, CSS, and
          JavaScript. Excited to delve into React.js, I aim to create dynamic
          and responsive web applications. With a commitment to learning and
          creativity, I'm eager to contribute to innovative projects and grow in
          the ever-evolving field of web development.
        </p>
      </section>
      {/* service */}

      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="">
          {
            servicesData.map((service,index)=>(
              <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>
      </section>

      {/*testimonials section*/}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial,i)=>
        <Testimonial key={i} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
        )}
        </ul>

      </section>
    </div>
  );
};

export default About;