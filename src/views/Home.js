import React, { Component } from 'react'
import Card from '../templates/Card'
import axios from 'axios'

class Home extends Component {

	constructor() {
		super()
		this.state = { 
			listarCards: []
		}
	}

	componentWillMount() {
		axios
			.get('http://localhost:3000/data')
  		.then(response => {
				const cardList = response.data.map(data => {
					return (
						<Card 
							key = { data.id }
							product_image = { data.product_image } 
							product_name  = { data.product_name  } 
							product_price = { data.product_price } 
						/>
					)
				})
				this.setState({ listarCards: cardList})
  		})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className = "home">
				{ this.state.listarCards }
			</div>
		)
	}

}

export default Home