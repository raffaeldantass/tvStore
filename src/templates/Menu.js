import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return (
			<nav className="menu">
				<img className="menu__logo-icon" src="assets/img/logo.svg" alt="Logo da companhia TV Store" />
				<img className="menu__checkout-icon" src="assets/img/checkout.svg" alt="Icone do Carrinho de compras" />
			</nav>
		)
	}
}

export default Menu