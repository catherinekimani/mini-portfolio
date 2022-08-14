import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header>
        <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div class="container">
            <nav class="">
                <div class='brand'><a href="/"><img src="https://cdn-icons-png.flaticon.com/128/5243/5243360.png" alt="" width={'45px'}></img></a></div>
                <ul>
                    <li><a href="/"><span>01.</span>Home</a></li>
                    <li><a href="#about"><span>02.</span>About</a></li>
                    <li><a href="#skills"><span>03.</span>Skills</a></li>
                    <li><a href="#portfolio"><span>04.</span>Portfolio</a></li>
                    <li><a href="#contact"><span>05.</span>Contact</a></li>
                </ul>
          </nav>
        </div>
</header>
    </div>
  )
}

export default Navbar