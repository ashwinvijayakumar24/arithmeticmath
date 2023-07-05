import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return(
        <div className="footer">
      <div className="contact-me">
        <div className="contact-info">
          <div>
            <a
              href="mailto:24ashwinv@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/email-icon.png"
                alt="email-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Email- 24ashwinv@gmail.com</p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/_ashwinv/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/instagram-icon.png"
                alt="instagram-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Instagram- @_ashwinv</p>
          </div>
          <div>
            <a
              href="https://twitter.com/_ashwinv/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/twitter-icon.png"
                alt="twitter-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Twitter- @_ashwinv</p>
          </div>
          <div>
            <a
              href="https://github.com/ashwinvijayakumar24"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/github-icon.png"
                alt="github-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>GitHub- ashwinvijayakumar24</p>
          </div>
        </div>
        <div className="copyright-notice">
          <h5>Copyright © 2023 Ashwin Vijayakumar </h5>
        </div>
        <div className="personal-site-link">
          <a href="https://ashwinvijayakumar.com" target="_blank" rel="noreferrer"><h5>https://ashwinvijayakumar.com</h5></a>
        </div>
      </div>
    </div>
    )
}   


export default Footer;