import Header from "../pages/Header";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Image from 'next/image'
import styles from './globals.css' 


export default function Home() {
  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <Skills/>
    <Services/>
    <div className="construction-img">
      <Image src={"/images/under-construction.jpg"} alt='Under Contruction' width={400} height={400} 
         className={styles['my-image']} ></Image> 
      </div> 
      <h1>This page is still under construction</h1>
    </>
  )
}
