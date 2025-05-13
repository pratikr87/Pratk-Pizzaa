import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Pratik Pizzaa</h2>
          <p>Stone-baked pizza with love since 2025. Taste the passion in every slice.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><LocationOnIcon /> 123 Pizza Street, Pune.</p>
          <p><PhoneIcon /> +91 75709 11622</p>
          <p><EmailIcon /> support@pratikpizzaa.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://twitter.com" aria-label="Twitter"><TwitterIcon /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FacebookIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Pratik Pizzaa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
