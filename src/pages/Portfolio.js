import { projects } from "../utils/portfolio.js";
import { getImageUrl } from "../utils/images.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  const listProjects = projects.map((projects) => (
      <li className="portfolio-box"  key={projects.id}>
       <Image className="img" src={getImageUrl(projects)} alt={projects.name} width={400} height={250} />
      <div className="portfolio-layer">
        <h4 className="">{projects.name} </h4>
        <p >{projects.content}</p>
        <a className="img-link" href="#">
          <FaExternalLinkAlt  className="img-icon"/>
        </a>
        </div>
      </li>
  ));
  return (
  <section className="portfolio" id="portfolio">
    <h2 className="heading"> Latest <span>Project </span></h2>
    <ul className="portfolio-container">
      {listProjects}
    </ul>
  </section>
  );
}
