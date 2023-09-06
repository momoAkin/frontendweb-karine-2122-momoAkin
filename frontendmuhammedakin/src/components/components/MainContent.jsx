import React from 'react'
import AnimeCard from './AnimeCard'
import styled from 'styled-components'

export default function MainContent(props) {
  return (
    <Main>
        <Mainhead>
            <Zoekbalk onSubmit={props.HandleSearch} data-cy="zoekbalk_input">
                <Input
                    type="search"
                    placeholder={'search '+props.naam}
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                    
                    >                
                </Input>
            </Zoekbalk>
        </Mainhead>
        <AnimeLijst>
            {props.animeList.map(anime =>(
                <AnimeCard
                    anime={anime}
                    key={anime.mal_id}/>
            ))}
        </AnimeLijst>
    </Main>
  )
}

const Main = styled.main `
    flex: 1 1 0%;
	padding: 0px 16px;
`

const Mainhead = styled.div`
    display: flex;
	justify-content: flex-end;
`

const Zoekbalk = styled.form`
	padding: 0.5PC;
    display: flex;
	justify-content: flex-start;
	flex: 1 1 0%;
`

const Input = styled.input`
    appearance: none;
	background: none;
	outline: none;
	border: none;
	display: block;
	width: 100%;
	max-width: 400px;
	padding: 16px;
	border-radius: 999px;
	background-color: #EEE;
	transition: 0.4s;
	::placeholder {
		color: #313131;
	}
	&:focus, &:valid {
		background-color: #89CFF0;
		color: #313131;
	}
`

const AnimeLijst = styled.div`
	/* flex-wrap: wrap;
	margin-top: 32px;
	margin: 32px -8px 0px; */

    display: flex;
	flex-wrap: wrap;
	margin: 0px -15px;
`