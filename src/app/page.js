import {FaBars, FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import Image from 'next/image'

const name = "<Odinamba Uche/>";

export default function Home() {
  return (
    <>
    <header className="header">  
      <a href='#' className="logo"> Portfol<span>io</span> </a>
      <FaBars id="menu"></FaBars>
      <nav className="navbar">
        <a href="#home" className="active"> Home </a>
        <a href="#about"> About </a>
        <a href="#services"> Services </a>
        <a href="#portfolio"> Portfolio </a>
        <a href="#contact"> Contact </a>
      </nav>
    </header>
    <section>
    <div className="home" id="home">
      <div className="home-content">
      <h3>Salut! Je Suis</h3>
      <h1>{name}</h1>
      <h3>And I'm a <span>Frontend Developer</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="social-media"> 
      <a href="#"><FaFacebook  className='social'/></a>
      <a href="#"><FaInstagram className='social'/></a>
      <a href="#"><FaTwitter className='social'/></a>
      <a href="#"><FaLinkedin className='social'/></a>
      </div> 
      <a href='#' className="btn">Download CV</a>
      </div>
      <Image src="/images/photo.jpg" alt="My Image" width={500} height={500}/>
    </div>
    </section>
    <section class="about" id="about">
      <div className="about-img">
      <Image src={"/images/photo.jpg"} alt='My about image' width={400} height={400}></Image> 
      </div> 
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href='#' className="btn">Git Me!</a>
      </div>
      <div className="services" id="services"></div>
    </section>
    </>
  )
}
