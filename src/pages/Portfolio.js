import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          {" "}
          Latest <span className="">Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <Image src="/images/portfolio1.png"
              alt="My about image"
              width={400}
              height={400}/> 
            <div className="portfolio-layer">
              <h4 className="">Web Design </h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                explicabo.
              </p>
              <Link href="#">
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
