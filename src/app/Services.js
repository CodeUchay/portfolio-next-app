import {BiCodeAlt} from 'react-icons/bi';
import {MdManageAccounts} from 'react-icons/md';
import {MdDesignServices} from 'react-icons/md';


export default function Services() {
    return (
    <section className='services' id="services">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">

        <div className="services-box">
        <BiCodeAlt className='services-icon'/>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href='#' className="btn">Read More</a>
        </div>

        <div className="services-box">
        <MdManageAccounts className='services-icon'/>
        <h3>Content Management Systems</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href='#' className="btn">Read More</a>
        </div>

        <div className="services-box">
        <MdDesignServices className='services-icon'/>
        <h3>Graphics Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href='#' className="btn">Read More</a>
        </div>
        </div>
    </section>
    );
}