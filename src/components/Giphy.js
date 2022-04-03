import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Giphy() {

	const [giphy, setGiphy] = useState([])
	const [search, setSearch] = useState("")

	let getGiphy = async () => {
		try{
			const results = await axios('https://api.giphy.com/v1/gifs/trending', {
				params: {
					api_key: "irmPwk72VjmepnE38NDbkGKF9HutMRR0",
					q: search,
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

	let showGiphy = giphy.map((gif) => {
		return(
			<div key={gif.id} className='gif'>
				<img src={gif.images.fixed_height.url} alt={gif.title} />
			</div>
		)
	})

	let onChangeHandler = (e) => {
		setSearch(e.target.value)
	}

	let onSubmitHandler = async (e) => {
		e.preventDefault()
		try{
			const searchResult = await axios('https://api.giphy.com/v1/gifs/search', {
				params: {
					api_key: "irmPwk72VjmepnE38NDbkGKF9HutMRR0",
					q: search,
					limit: 25,
				}
			})
			setGiphy(searchResult.data.data)
		}catch(e) {
			console.log(e)
		}
	}

	return(
		<div className='gif-container'>
			<form className='gif-form' onSubmit={onSubmitHandler}>
				<input type="text"className='search-box' onChange={onChangeHandler}/>
				<button>Hit Me</button>
			</form>
			{showGiphy}	
		</div>
	)
}

export default Giphy;