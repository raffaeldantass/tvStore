import React from 'react'

const Card = ({ id, product_image, product_name, product_price }) => {
	return (
		<div key = { id } className = "card montserrat">
			<img className = "card__img" src = { product_image } />
			<h2 className  = "card__title"> { product_name } </h2>
			<h3 className  = "card__price"> R$ { product_price } </h3>
		</div>
	)
}

export default Card