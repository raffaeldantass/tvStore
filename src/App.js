import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './templates/Menu';
import Footer from './templates/Footer';
import Home from './views/Home';
import Cart from './views/Cart';
import ProductDetail from './views/ProductDetails';

class Store extends Component {
	render() {
		return (
			<div>
				<Menu />
				<main className="main">
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/products/:id" component={ ProductDetail } />
						<Route path="/carrinho" component={ Cart } />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Store;