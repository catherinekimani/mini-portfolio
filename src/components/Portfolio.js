import React from 'react'

const Portfolio = () => {
  return (
      <div id='portfolio'>
          <div className='d-flex align-items-center'>
          <h2> <span>01.</span>Some Projects that I have worked on</h2>
              <hr />
          </div>
          <div class="row">
                <div class=" col-md-6">
                <div class="card mb-3" style={{ width: '30rem' }}>
        <img src="./ga.jpg" alt="" class="img-fluid" width="auto" height="380px%"></img>
                        <div class="project-detail">
                            <h5 class="card-title heading text-center">Gallery Application</h5>
                            <blockquote>
                            <p>A Web Application that allows user(s) to view different images from various categories including Food,Drinks,Animals etc.</p>
                            </blockquote>
                        <a href="https://kate-gallery.herokuapp.com/" class="btn btn-primary btn-sm">View site</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-3" style={{ width: '30rem' }}>
        <img src="./pizza.png" alt="" class="img-fluid" width="auto" height="380px%"></img>
                        <div class="project-detail">
                            <h5 class="card-title heading text-center">Pizza Application</h5>
                            <blockquote>
                            <p>This is a Pizza website which allows users to choose multiple pizzas of their choice and make an order online.</p>
                            </blockquote>
                        <a href="https://catherinekimani.github.io/pizza-palace-IP4/" class="btn btn-primary btn-sm">View site</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-3" style={{ width: '30rem' }}>
        <img src="./images.jpeg" alt="" class="img-fluid" width="auto" height="380px%"></img>
                        <div class="project-detail">
                            <h5 class="card-title heading text-center">Instaclone</h5>
                            <blockquote>
                            <p>A Clone Web Application for Instagram built with Python and Django.</p>
                            </blockquote>
                        <a href="https://kate-insta-clone.herokuapp.com/" class="btn btn-primary btn-sm">View site</a>
                        </div>
                    </div>
              </div>
              <div class="col-lg-4 col-md-4 col-md-12">
                <div class="card mb-3" style={{ width: '30rem' }}>
        <img src="./images.jpeg" alt="" class="img-fluid" width="auto" height="380px%"></img>
                        <div class="project-detail">
                            <h5 class="card-title heading text-center">Gallery Application</h5>
                            <blockquote>
                            <p>A Web Application that allows user(s) to view different images from various categories including Food,Drinks,Animals etc.</p>
                            </blockquote>
                        <a href="https://kate-gallery.herokuapp.com/" class="btn btn-primary btn-sm">View site</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Portfolio