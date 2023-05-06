import Image from 'next/image'

export default function About() {
    return (
        <section class="about" id="about">
      <div>
      <Image
        src="/images/photo.jpg"
        alt="My about image"
        width={400}
        height={400}
      />
    </div> 
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href='#' className="btn">Git Me!</a>
      </div>
      <div className="services" id="services"></div>
    </section>
        );
}