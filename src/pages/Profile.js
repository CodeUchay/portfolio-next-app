import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import Image from 'next/image'

const name = "<Odinamba Uche/>";

export default function Profile() {
    return (
    <section id="home">
    <div className="home" >
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
      <div>
      <Image src="/images/photo.jpg" alt="My Image" width={500} height={500}/>
      </div>
    </div>
    </section>
    );
}