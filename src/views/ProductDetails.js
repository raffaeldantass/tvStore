import React, { Component } from 'react'
import axios from 'axios'

class ProductDetail extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			id: [],
			product: null
		}
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3000/data/${this.props.match.params.id}`)
			.then(response => { this.setState({ product: response.data }) })
			.catch(error => console.log(error))
	}

	render() {
		if (this.state.product) {
			return (
				<div className="product-detail">
					<div className="product-detail__wrapper">
						<img className="product-detail__image" src={ this.state.product.product_image_big } />
						<h1 className="product-detail__title montserrat"> { this.state.product.product_name } </h1>
						<h2 className="product-detail__price montserrat"> R$ { this.state.product.product_price } </h2>
						<p className="product-detail__brand montserrat"> { this.state.product.details[0].brand } </p>
						<p className="product-detail__model montserrat"> { this.state.product.details[0].model } </p>
						<p className="product-detail__tv-inch montserrat"> { this.state.product.details[0].tv_inch_size } </p>
						<p className="product-detail__tv-type montserrat"> { this.state.product.details[0].tv_type } </p>
						<p className="product-detail__description montserrat"> { this.state.product.details[0].description } </p>
						<button className="product-detail__button montserrat"> Adicionar ao Carrinho </button>
					</div>
				</div>
			)
		} else {
			return (
				<span> Loading...</span>
			)
		}

	}
}

export default ProductDetail;