import {useState} from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import styled from 'styled-components';
import axios from 'axios';
import axiosRetry from 'axios-retry'
import React from 'react';
import Swal from "sweetalert2";
import config from '../../config.json'

function Manga() {
	const [mangaList, SetMangaList] = useState([]);
	const [topManga, SetTopManga] = useState([]);
	const [search, SetSearch] = useState("");

	const[loading, setLoading] = useState(false);
	const[error, setError] = useState(false);

	const GetTopManga = async () => {
		const client = axios.create();
		axiosRetry(client, {
		  retries: 5,
		  retryDelay: () => 3000,
		  retryCondition: () => true,
		});
		setLoading(true)


		return client
		  .get(config.base_url+'top/manga?limit=10&sfw=true')
			.then(res => {SetTopManga(res.data.data)
				setLoading(false)})
			.catch(err => {if(err.response.status===429){

			}else{
				setError(true)
			}});


		// axios.get('https://api.jikan.moe/v4/top/manga?limit=10')
		// .then(res => {SetTopManga(res.data.data)})
		// .catch(err => {
		// 	setTimeout(()=>{
		// 		axios.get('https://api.jikan.moe/v4/top/manga?limit=10')
		// 		.then(res => {SetTopManga(res.data.data)})
		// 		.catch(err => {console.log(err)});
		// 	},3000)
		// });


		//bluescreen na error 429 te veel requests
		// const temp = await fetch(`apicall`)
		// 	.then(res => res.json());
     	// SetTopManga(temp.data);
	}


	const HandleSearch = e => {
		e.preventDefault();

		FetchManga(search);
	}

	const FetchManga = async (query) => {
		const client = axios.create();
		axiosRetry(client, {
		  retries: 5,
		  retryDelay: () => 3000,
		  retryCondition: () => true,
		});
		setLoading(true)

		return client
		  .get(config.base_url+'manga?q='+query+'&sfw=true')
			.then(res => {SetMangaList(res.data.data)
				setLoading(false)})
			.catch(err => {if(err.response.status===429){

			}else{
				setError(true)
			}});
	}

	React.useLayoutEffect(() => {
		GetTopManga();
	}, []);
	if(loading){
		return <P 	data-cy="loading">loading...</P >
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
					animeList={mangaList}
          naam='manga'/>
		  <Sidebar
					topAnime={topManga}
          naam='manga'/>
			</Div>
	);
}

export default Manga;


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
