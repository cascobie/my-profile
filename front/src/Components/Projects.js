import React from 'react'
import cactus from '../Images/cactus.svg'


import './projects.css'
import mrDesktop from '../Images/mood-reads-desktop.png';
import mrMobile from '../Images/mood-reads-mobile.png';
import mp from '../Images/moon-phase-desktop.png';
import mpMobile from '../Images/moon-phase-mobile.png';
import pbMobile from '../Images/plant-buddy-mobile.png';
import pbDesktop from '../Images/plant-buddy-desktop.png';
import cDesktop from '../Images/covid-cases-desktop.png';
import cMobile from '../Images/covid-cases-mobile.png';
import dfDesktop from '../Images/df-desktop.png';
import dfMobile from '../Images/df-mobile.png';

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <div className="projects-title">
          <span>Projects</span>
        </div>
        <div className="projects-subtitle">
        <span> Some stuff that I've built..</span>
        </div>
      </div>

      <div className="projects-containter">
        <div className="container-img">
          <div>
            <img className="dt-img" src={mrDesktop} />
          </div>
          <img className='mobile-img' src={mrMobile} />
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>

          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>
      </div>
      
      <div className="projects-containter even">
        <div className="container-img">
          <div>
          <img className="dt-img" src={mp} />
          </div>
          <img className='mobile-img' src={mpMobile} />
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>
      </div>


      <div className="projects-containter">
        <div className="container-img">
          <div>
          <img className="dt-img" src={pbDesktop} />
          </div>
          <img className='mobile-img' src={pbMobile} />
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>
      </div>

      <div className="projects-containter even">
        <div className="container-img">
          <div>
          <img className="dt-img" src={cDesktop} />
          </div>
          <img className='mobile-img' src={cMobile} />
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>
      </div>

      <div className="projects-containter">
        <div className="container-img">
          <div>
          <img className="dt-img" src={dfDesktop} />
          </div>
          <img className='mobile-img' src={dfMobile} />
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects
