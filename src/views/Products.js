import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetails';

const Products = () => {
	return (
		<Switch>
			<Route exact path="/products" component={ Home } />
			<Route path="/products/:id" component={ ProductDetail } />
		</Switch>
	);
}

export default Products;