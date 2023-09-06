import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import styled from 'styled-components';
import axios from 'axios';
import axiosRetry from 'axios-retry'
import React from 'react';
import Swal from "sweetalert2";
import config from '../../config.json'

function Anime() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const[loading, setLoading] = useState(false);
	const[error, setError] = useState(false);

	const GetTopAnime = async () => {
		const client = axios.create();
		axiosRetry(client, {
		  retries: 5,
		  retryDelay: () => 3000,
		  retryCondition: () => true,
		});
		setLoading(true)


		return client
		  .get(config.base_url+'top/anime?limit=10&sfw=true')
			.then(res => {SetTopAnime(res.data.data)
				setLoading(false)})
			.catch(err => {if(err.response.status===429){

			}else{
				setError(true)
			}});
		
		
		// axios.get('https://api.jikan.moe/v4/top/anime?limit=10')
		// .then(res => {SetTopAnime(res.data.data)})
		// .catch(err => {
		// 	if (err.code.status === 400) {
		// 		setTimeout(()=>{
		// 			axios.get('https://api.jikan.moe/v4/top/anime?limit=10')
		// 			.then(res => {SetTopAnime(res.data.data)})
		// 			.catch(err => {console.log(err)},3000);
		// 		})
		// 	}
		// 	else {
		// 		return Promise.reject({
		// 			message: "You've recieved an error!"
		// 		  })
		// 	}


		// });

		

		//bluescreen na error 429 te veel requests
		// const temp = await fetch(`apicall`)
		// 	.then(res => res.json());
		// SetTopAnime(temp.data);
	}

	const HandleSearch = e => {
		e.preventDefault();
		
		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const client = axios.create();
		axiosRetry(client, {
		  retries: 5,
		  retryDelay: () => 3000,
		  retryCondition: () => true,
		});
		setLoading(true)

		return client
		  .get(config.base_url+'anime?q='+query+'&sfw=true')
		  .then(res => {SetAnimeList(res.data.data)
			setLoading(false)})
		.catch(err => {if(err.response.status===429){

		}else{
			setError(true)
		}});
	}
	React.useLayoutEffect(() => {
		FetchAnime("naruto");

	}, []);
	React.useLayoutEffect(() => {
		GetTopAnime();

	}, []);
	if(loading){
		return <P >loading...</P >
	}
	if(error){
		return Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		  })
	}
	return (
		
			<Div>
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} 
					naam='anime'/>
				<Sidebar 
					topAnime={topAnime} 
					naam='anime'/>
			</Div>
	);
}

export default Anime;


const Div = styled.div`
	display: flex;
`
const P = styled.p `
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
