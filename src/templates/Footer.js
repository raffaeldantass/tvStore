import React, { Component } from 'react';

const Footer = () => {
	return (
		<footer className="footer montserrat">
			<div className="footer__wrapper">
				<img className="footer__logo-icon" src="/assets/img/logo.png" alt="Logo da companhia Stop and Shop" />

				<ul className="footer__social-icon-list">
					<li> 
						<a href="https://www.facebook.com" target="_blank" rel="noopener"><img className="footer__social-icon" src="/assets/img/facebook.svg" alt="Logo do Facebook - Link para a página"/></a>
					</li>

					<li>
						<a href="https://www.twitter.com" target="_blank" rel="noopener"><img className="footer__social-icon" src="/assets/img/twitter.svg" alt="Logo do twitter - Link para a conta"/></a>
					</li>
					
					<li>
						<a href="https://www.instagram.com" target="_blank" rel="noopener"><img className="footer__social-icon" src="/assets/img/instagram.svg" alt="Logo do Instagram - Link para a conta"/></a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer