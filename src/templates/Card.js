import React from 'react'

const Card = ({ id, product_image, alt_description, product_name, product_price }) => {
	return (
		<div key = { id } className = "card montserrat">
			<img className = "card__img" src = { product_image } alt={ alt_description }/>
			<h2 className  = "card__title"> { product_name } </h2>
			<h3 className  = "card__price"> R$ { (product_price/100).toFixed(2).replace('.', ',') } </h3>
		</div>
	)
}

export default Card