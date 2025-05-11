import React, { useState, useEffect, useRef } from 'react';
import './MenuHorizontal.css';

function MenuHorizontal() {
  const siteLinks = [
    "My information",
    "Bar Chart Demo",
    "Time Zone Demo",
    "My Experience",
    "My Education",
    "Todo App Demo",
    "Employment History",
    "Get in touch contact me",
    "Back to the top"
  ];

  const currentHref = [
    "#general-info",
    "#bar-chart",
    "#time-zone",
    "#experience",
    "#education",
    "#todo-app",
    "#employment-contact",
    "#employment-contact",
    "#top"
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust visibility threshold
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    currentHref.forEach((href) => {
      const id = href.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [currentHref]);

  return (
    <div className={`menu-horizontal ${isVisible ? 'visible' : ''}`}>
      <ul className='menu-horizontal-ul'>
        {siteLinks.map((link, index) => (
          <li key={index} className='menu-horizontal-li'>
            <a
              className={`menu-horizontal-a ${
                currentHref[index] === activeSection ? 'active' : ''
              }`}
              href={currentHref[index]}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuHorizontal;
