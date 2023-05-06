import Image from 'next/image'
import {HiChip, HiBadgeCheck} from 'react-icons/hi';


export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js','TypeScript','PL/SQL', 'C# .NET CORE', 'Java/Java EE' ];
    return (
        <section id="skills">
        <div className="skills">
          <div className="skills-heading">
            <HiChip className="chip" />
            <h1> Skills &amp; Technologies </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.</p>
          </div>
          <div className="skills-headingg">
            {skills.map((skill) => (
                <div className="skills-first">
                  <HiBadgeCheck className="badge" />
                  <span>
                    {skill}
                  </span>
                </div>
            ))}
          </div>
        </div>
      </section>
        );
}