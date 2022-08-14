import React from 'react'

const About = () => {
  return (
      <div id='About'>
          <div className='row'>
          <div className='col-md-6'>
          <div className='d-flex align-items-center'>
          <h2> <span>01.</span>About me</h2>
              <hr />
          </div>
          <div className='inner'>
              <p>Self-motivated energetic individual capable of innovative thinking in a team environment with an analytical mind, problem-solving aptitude, and the ability to juggle multiple projects at one time.</p>
                  </div>
                  <div className='skills'>
                      <p>Some of the technologies I use include;</p>
                      <div className='d-flex mb-5'>
                      <ul>
                          <li>Python</li>
                          <li>Typescript</li>
                          <li>React</li>
                          </ul>
                          <ul>
                          <li>Html</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                      </ul>
                      <ul>
                          <li>Django</li>
                          <li>Flask</li>
                          <li>Angular</li>
                          </ul>
                          </div>
                  </div>
              </div>
              <div class="col-md-6 initial-1 aos-init" data-aos="zoom-in" data-aos-delay="300">
        <img src="./kay.png" alt="" class="img-fluid" width="50%" height="50%"></img>
</div>
              </div>
    </div>
  )
}

export default About