import React from 'react';
import Image from 'next/image';
import "./Footer.css"
import logo from '@/./public/assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       <div className='footer-con'>
       <div className="footer-logo">
          {/* Replace with your actual logo image path */}
          <div className='logoname'>
          <Image src={logo} alt="Logo" width={30} height={30} className='Alphadocs'  />
          <h2>Alphadocs</h2>
          </div>
          
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to</p>
        </div>
        
        <div className="footer-newsletter">
          <input type="text" placeholder="News Lettres" />
          <button class="arrow-button">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2"/>
      <path d="M10 8l4 4-4 4" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
        </div>

       </div>
        

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Product</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Useful links</h4>
          <ul>
            <li>Give feedback</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
      <div class="social-icons">
  <a href="#" aria-label="Instagram" class="social-icon">
    <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM17.625 5.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Z"/>
    </svg>
  </a>
  <a href="#" aria-label="LinkedIn" class="social-icon">
    <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5A1.49 1.49 0 1 1 3.5 5a1.49 1.49 0 0 1 1.48-1.5Zm.76 4.06h-3v12h3V7.56ZM20.5 13.51v7.06h-3v-6.59c0-2.67-3.19-2.47-3.19 0v6.59h-3v-12h3v1.69c1.39-2.58 6.19-2.78 6.19 2.25Z"/>
    </svg>
  </a>
  <a href="#" aria-label="Facebook" class="social-icon">
    <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.66 8.83 8.43 9.75v-6.9H8.89v-2.85h1.54v-2.18c0-1.52.9-2.36 2.28-2.36.66 0 1.36.12 1.36.12v1.5h-.77c-.76 0-1 .48-1 .96v1.18h1.77l-.28 2.85h-1.49v6.9C18.34 20.83 22 16.84 22 12c0-5.52-4.48-10-10-10Z"/>
    </svg>
  </a>
  <a href="#" aria-label="Twitter" class="social-icon">
    <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5.92c-.8.36-1.66.61-2.56.72a4.47 4.47 0 0 0 1.95-2.47 9.04 9.04 0 0 1-2.85 1.09 4.49 4.49 0 0 0-7.66 4.1A12.77 12.77 0 0 1 3 4.88a4.48 4.48 0 0 0 1.39 5.99c-.7-.02-1.36-.22-1.94-.54v.05a4.5 4.5 0 0 0 3.6 4.41 4.55 4.55 0 0 1-2.03.08A4.48 4.48 0 0 0 9 17.78a9.07 9.07 0 0 1-5.61 1.93c-.36 0-.71-.02-1.05-.07a12.8 12.8 0 0 0 6.93 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.4-.01-.59A9.22 9.22 0 0 0 22 5.92Z"/>
    </svg>
  </a>
</div>

        <p>© 2024 Alphadocs all rights reserved</p>
      </div>
    </footer>
  );
}
