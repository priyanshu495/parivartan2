import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

const sections = ['home', 'about', 'services', 'programs', 'resources', 'contact'];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe visible section
  useEffect(() => {
    const observers = [];

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
          }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.rightNavbar} ${scrolled ? styles.scrolled : ''}`}>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => handleScrollTo(section)}
          className={`${styles.navBtn} ${activeSection === section ? styles.active : ''}`}
          title={section}
        >
          {section === 'home' && <HomeOutlinedIcon />}
          {section === 'about' && <InfoOutlinedIcon />}
          {section === 'services' && <WorkOutlineOutlinedIcon />}
          {section === 'programs' && <SchoolOutlinedIcon />}
          {section === 'resources' && <AutoAwesomeMosaicOutlinedIcon />}
          {section === 'contact' && <ContactSupportOutlinedIcon />}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
