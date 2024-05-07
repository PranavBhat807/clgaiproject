import React from 'react'
import hamburger from './hamburger.svg'
import close from './close.svg'
import download from './download.jpeg'
function App() {
  function display() {
    var lists = document.getElementById('listo');
    var ham = document.getElementById('ham');
    var wrapper = document.getElementById('wrapper');
    ham.addEventListener("click", () => {
      lists.style.display = 'block'
      ham.style.display = 'none'
      wrapper.style.zIndex = '0'
    });
  }

  function closing() {
    var lists = document.getElementById('listo');
    var ham = document.getElementById('ham');
    var wrapper = document.getElementById('wrapper');
    var close = document.getElementById('close');
    close.addEventListener("click", () => {

      lists.style.display = 'none';
      ham.style.display = 'block';
    });
  }

  return (
    <>
      <div className="wrapper" id='wrapper'>

        <div className="mobile-navigation">
          <div className="hamburger">

            <img className='hamburger' id='ham' src={hamburger} alt="hamburger" onClick={display} />

          </div>

          <div className="listings" id='listo'>
            <img src={close} alt="close" className="close" id="close" onClick={closing} />

            <ul className="list-items">
              <a href="">
                <li>About</li>
              </a>
              <a href=""><li>Team</li></a>
              <a href=""><li>Pricing</li></a>
              <hr></hr> <hr></hr>
              <a href=""><li>Issues</li></a>
              <a href=""><li>Signin</li></a>

              <li></li>
            </ul>
          </div>
        </div>

        <nav className='navigation-bar' id='nav-bar'>
          <ul className='navigation-items'>
            <div className='LOGO'>BUZZLINE</div>

            <a href="">
              <li>About</li>
            </a>
            <a href=""><li>Team</li></a>
            <a href=""><li>Pricing</li></a>
            <a href=""><li>Issues</li></a>
            <a href=""><li>Signin</li></a>

            <li></li>
          </ul>
        </nav>

        <div className='text-fonts'>
          <h1 className='Mobile'>Intelligent</h1>
          <h1 className='News'>News</h1>

          <h2>Access the power of Artificial Intelligence in News</h2>
          <img className='news-img-mobile' src={download} alt="images" />

        </div>

        <img className='news-img' src={download} alt="images" />
      </div>


    </>
  )
}

export default App