import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
	constructor() {
		super()
		this.state = {
			badge: 0
		}
	}

	render() {
		return (
			<nav className="menu">
				<div className="menu__wrapper">
					<Link to="/">
						<img className="menu__logo-icon" src="/assets/img/logo.png" alt="Logo da companhia Stop and Shop" />
					</Link>
					<Link to="/carrinho">
						<div className="menu__checkout-block">
							<span className="menu__checkout-block__badge montserrat"> { this.state.badge } </span>
							<img className="menu__checkout-block__checkout-icon" src="/assets/img/checkout.svg" alt="Icone do Carrinho de compras" />
						</div>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Menu