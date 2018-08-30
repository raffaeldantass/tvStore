import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
	render() {
		return (
			<nav className="menu">
				<Link to="/">
					<img className="menu__logo-icon" src="assets/img/logo.png" alt="Logo da companhia Stop and Shop" />
				</Link>
				<img className="menu__checkout-icon" src="assets/img/checkout.svg" alt="Icone do Carrinho de compras" />
			</nav>
		)
	}
}

export default Menu