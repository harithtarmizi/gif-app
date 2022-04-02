import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Giphy() {

	const [giphy, setGiphy] = useState([])

	let getGiphy = async () => {
		try{
			const results = await axios('https://api.giphy.com/v1/gifs/trending', {
				params: {
					api_key: "irmPwk72VjmepnE38NDbkGKF9HutMRR0",
					limit: 25,
				}
			})
			setGiphy(results.data.data)
		}catch(e) {
			console.log(e)
		}
	}

	useEffect ( () => {
		getGiphy()
	}, [])
	console.log(giphy)
	
	return(
		<div>
			<h1>This is the Giphy Component</h1>
		</div>
	)
}

export default Giphy;