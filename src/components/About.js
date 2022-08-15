import React from 'react'

const About = () => {
  return (
      <div id='About'>
          <div className='row'>
          <div className='col-md-6'>
          <div className='d-flex align-items-center'>
          <h2> <span>02.</span>About me</h2>
              <hr />
          </div>
          <div className='inner'>
              <p>Self-motivated energetic individual capable of innovative thinking in a team environment with an analytical mind, problem-solving aptitude, and the ability to juggle multiple projects at one time.</p>
              <p>My interest in Web Development started back in 2019. Though I did not have any idea on how to go about it, I begun researching and learning and as time went by I understood the basics of web development.</p>
              <p>Earlier this year, I joined Moringa School and pursued Software Development specifically Full Stack(Front-end and Back-end) Development. It has been a great journey as I have been able to learn a lot and  gain more skills.</p>
              <p>I recently graduated from Moringa School with a certificate in Software Development and I'm currently looking for a job or an internship so that I can be able to use my proven skills in various Programming languages and I also look forward to collaborating on Projects.</p>
              <p>Find me on;</p>
                      <a class="link" href="https://github.com/catherinekimani"><i class="fa fa-github"></i></a>
                        <a class="link" href="https://github.com/catherinekimani"><i class="fa fa-linkedin" ></i></a>
                        <a class="link" href="https://github.com/catherinekimani"><i class="fa fa-facebook-square"></i></a>
                        <a class="link" href="https://github.com/catherinekimani"><i class="fa fa-twitter"></i></a>
                      
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