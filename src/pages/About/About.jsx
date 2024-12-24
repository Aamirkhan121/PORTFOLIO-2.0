import React, { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

const servicesData=[
  {
    "title": "Web Development",
    "icon": "/images/icon-dev.svg",
    "description": "I'm actively honing my skills by building projects with the MERN stack, focusing on both frontend and backend development to create complete web applications."
  },
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "Front-end Developer",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the fresher level."
  },
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
          "As a fresher MERN stack web developer, I am eager to apply my knowledge of MongoDB, Express, React, and Node.js to build dynamic and user-friendly web applications. I have a strong foundation in web development and am passionate about learning new technologies. I am committed to delivering high-quality solutions and growing as a developer."
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
