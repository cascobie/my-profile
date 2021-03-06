import React from 'react';
import './skills.css';

import flower from '../Images/flower3.png';
import flower4 from '../Images/flower4.png'

function Skills() {
  return (
    <section className="skills" id="skills">


    <div className="skills-contents">
      <img className='skills-flower' src={flower} />
      <img className='skills-flower-2' src={flower4} />


      <div className="section-header">
        <span>Skills and Tools</span>
      </div>

      <div className="section-subtitle">
        <span>The skills, tools and technologies I use to bring products to life...</span>
      </div>

      <div className="skills-container">
        <ul>
          <li>
            <div className="item-container">
              <i class="fab fa-html5"></i>
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-css3"></i>
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-sass"></i>
              <p>SASS</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-js-square"></i>
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-react"></i>
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i id="skills-git" class="fab fa-github"></i>
              <p>Github</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-wordpress-simple"></i>
              <p>Wordpress</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="fab fa-php"></i>
              <p>PHP</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-jquery-plain"></i>
              <p>JQuery</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-ruby-plain"></i>
              <p>Ruby</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-rails-plain"></i>
              <p>Rails</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-nodejs-plain"></i>
              <p>Nodejs</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-express-original"></i>
              <p>Express</p>
            </div>
          </li>
          <li>
            <div className="item-container">
              <i class="devicon-postgresql-plain"></i>
              <p>Postgresql</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

      
    </section>
  )
}

export default Skills
