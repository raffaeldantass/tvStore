import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Menu from './templates/Menu';
import Footer from './templates/Footer';
import ProductDetail from './views/ProductDetails';

class Store extends Component {
	render() {
		return (
			<div>
				<Menu />
				<main className="main">
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/detalhes" component={ ProductDetail } />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Store;