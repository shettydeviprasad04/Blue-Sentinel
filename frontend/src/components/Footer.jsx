import React from 'react'
import './footer.css'; 

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Blue Sentinel. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
    </div>
  )
}
