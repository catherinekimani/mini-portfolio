import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='row'>
      <div class="col-md-6 initial-1 aos-init" data-aos="zoom-in" data-aos-delay="300">
      <div id='contact'>
          <h2><span>04.</span>Let's talk</h2>
          <h2 className='title'>Get in touch</h2>
          <p className='p'>Wanna talk about a project or just saying hi</p>
          <a  className='reach' href='Email: catherinekimani882@gmail.com'><span id="io">Say Hello</span>: catherinekimani882@gmail</a>
          </div>
          </div>
      <div class="col-md-6 initial-1 aos-init" data-aos="zoom-in" data-aos-delay="300">
        <img src="./cont.png" alt="" class="img-fluid" width="50%" height="50%"></img>
        </div>
      </div>
      <p className='footer'>Made by Catherine Kimani <br />💕</p>
      <div class="up-arrow ">
            <div class="arrow ">
                <a href="Home"><i class="fa fa-angle-up "></i>
            </a>
            </div>
        </div>
      </div>
  )
}

export default Contact