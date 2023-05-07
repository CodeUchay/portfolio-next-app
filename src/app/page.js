'use client'
import Header from "../pages/Header";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Projects from "../pages/Portfolio";
import UnderConstruc from "@/pages/UnderConstruc";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/> 
    </>
  )
}
