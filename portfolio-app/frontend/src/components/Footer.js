import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  // Rotating signature functionality
  useEffect(() => {
    const initEmblem = (el, str) => {
      const element = document.querySelector(el);
      if (!element) return;

      const text = str ? str : element.innerHTML;
      element.innerHTML = '';

      for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const span = document.createElement('span');
        const node = document.createTextNode(letter);
        const r = (360/text.length)*(i);
        const x = (Math.PI/text.length).toFixed(0) * (i);
        const y = (Math.PI/text.length).toFixed(0) * (i);

        span.appendChild(node);
        span.style.webkitTransform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
        span.style.transform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
        element.appendChild(span);
      }
    };

    // Initialize the emblem after component mounts
    const timer = setTimeout(() => {
      initEmblem('.emblem');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">VA</span>
            <p className="footer-tagline">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Vishnu Anand. Made with <FaHeart className="heart-icon" />
              and lots of coffee ☕
            </p>
          </div>

          <div className="footer-right">
            <div className="emblem">Vishnu*Anand*</div>
            <button
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;