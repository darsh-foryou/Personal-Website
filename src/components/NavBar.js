import React, { use, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';


const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, seScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () =>{
        if(window.scrollY > 50){
            seScrolled(true);
        }
        else{
            seScrolled(false);
        }
    }

    window.addEventListener('scroll', onScroll);
    return() => window.removeEventListener("scroll" , onScroll);
  }, [])
  const onUUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
      <Navbar.Brand href="/">
      <h2 style={{ color: 'white', fontWeight: 'bold' }}>DM.</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUUpdateActiveLink('projects')}> Projects </Nav.Link>
            <Nav.Link href="#works" className={activeLink === 'workexperience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUUpdateActiveLink('workexperience')}> Work Experience </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/modi-darshil/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/darshil_modii?igsh=ZTI5aHgzYzV4dTlz"><img src={navIcon3}  alt="Instagram" /></a>
                <a href="https://github.com/darsh-foryou"><img src={navIcon2}  alt="GitHub" /></a>
                <a href="https://wa.me/13157461195"><img src={navIcon4} alt="WhatsApp" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
                <span> Let's Connect </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
