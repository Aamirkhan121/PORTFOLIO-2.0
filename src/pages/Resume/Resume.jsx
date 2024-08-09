import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* EDUCATION */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookOpenReader />
          </div>
          <h3 className="h3">EDUCATION</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Tech Altum Full-Stack (MERN-Developer)"
            date="2023-2024"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
          <TimelineItem
            title="R.S.More College"
            date="2019-2021"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
          <TimelineItem
            title="Globle School Of India"
            date="2017-2019"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
        </ol>
      </div>
      
      {/* EXPERIENCE */}

      {/* <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookOpenReader />
          </div>
          <h3 className="h3">EXPERIENCE</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Tech Altum Full-Stack (MERN-Developer)"
            date="2023-2024"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
          <TimelineItem
            title="R.S.More College"
            date="2019-2021"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
          <TimelineItem
            title="Globle School Of India"
            date="2017-2019"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum error, voluptates provident natus voluptas explicabo odio eaque est consectetur!"
          />
        </ol>
      </div> */}

      {/* Skill section */}

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="PSD CONVERT TO CODE" value={80}/>
          <SkillItem title="HTML & HTML5" value={75}/>
          <SkillItem title="CSS & CSS3" value={60}/>
          <SkillItem title="JAVASCRIPT" value={65}/>
          <SkillItem title="BOOTSTRAP" value={60}/>
          <SkillItem title="REACT" value={70}/>
          <SkillItem title="REACT REDUX-TOOLKIT" value={55}/>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
