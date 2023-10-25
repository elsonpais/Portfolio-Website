import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Portfolio.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://linkedin.com/in/elsonpais" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
        </a>

        <a href="https://github.com/elsonpais" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
        </a>
        
        <a href="https://www.instagram.com/elsonpais/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
        </a>

        <a href="mailto:elsonpais22@gmail.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bx-envelope"></i>
        </a>
            </div>

            <span className="footer__copy">&#169; Elson Pais. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer