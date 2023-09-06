import React from 'react'
import styled from 'styled-components'

export default function sidebar({topAnime,naam}) {
  return (
        <Aside>
            <Nav>
                <H3>Top 10 {naam}</H3>
                {topAnime.map(anime => (
                    <A 
					href={anime.url} 
					target="_blank"
					key={anime.mal_id} 
					rel="noreferrer"
					data-cy='topAnime_Input'>
					{ anime.title }
                    </A>
                ))}
            </Nav>
        </Aside>
  )
}

// css deel

const Aside = styled.aside`
    flex: 1 1 250px;
    max-width: 200px;
    padding-right: 16px;
`

const Nav = styled.nav`
    padding-left: 16px;
	padding-right: 16px;
`
const H3 = styled.h3`
    color: #313131;
	font-size: 24px;
	margin-bottom: 16px;
`

const A = styled.a`
    display: block;
	padding: 8px 16px;
	text-align: left;
	color: #313131;
	font-size: 16px;
	margin-bottom: 16px;
	background-color: #EEE;
	border-radius: 999px;
	text-decoration: none;
	transition: 0.4s;
	&:hover {
		background-color: #00BFFF;
		color: #fff;
	}
`