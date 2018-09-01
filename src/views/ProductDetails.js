import React, { Component } from 'react';

class ProductDetail extends Component {
	render() {
		return (
			<div className="product-detail">
				<div className="product-detail__wrapper">
					<img className="product-detail__image" src="https://via.placeholder.com/500x500" />
					<h1 className="product-detail__title montserrat"> TV Samsung </h1>
					<h2 className="product-detail__price montserrat"> R$ 1200 </h2>
					<p className="product-detail__description montserrat"> lorem ipsum dolor sit amet constructos latem iutaes dales larem folor lorem ipsum dolor sit amet constructos latem iutaes dales larem folor </p>
					<button className="product-detail__button montserrat"> Adicionar ao Carrinho </button>
				</div>
			</div>
		)
	}
}

export default ProductDetail;