import {FaBars} from 'react-icons/fa';

export default function Header() {
    return (
    <header className="header">  
      <a href='#' className="logo"> Portfol<span>io</span> </a>
      <FaBars id="menu"></FaBars>
      <nav className="navbar">
        <a href="#home"> Home </a>
        <a href="#about"> About </a>
        <a href="#skills"> Skills </a>
        <a href="#services"> Services </a>
        <a href="#portfolio"> Portfolio </a>
        <a href="#contact"> Contact </a>
      </nav>
    </header>
    );
}