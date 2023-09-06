import React from 'react'
import styled from 'styled-components'

function AnimeCard({anime}) {
  return (
    <Animekaart>
        <A 
            href={anime.url} 
            target="_blank" 
            rel="noreferrer"
            data-cy="animecard_a">
                <Figuur>
                    <Img
						src={anime.images.jpg.image_url} 
                        alt="Anime Image"/>
                </Figuur>
            <H3>{anime.title}</H3>
			<P>{anime.synopsis}</P>
        </A>
    </Animekaart>
  )
}

export default AnimeCard

const Animekaart = styled.article`
  width: 33.333%;
	min-width: 250px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
`

const A = styled.a`
	text-decoration: none;
`

const Figuur = styled.figure`
  display: block;
	margin-bottom: 16px;
`

const Img = styled.img`
 display: block;
  width: 100%;

`
const P = styled.p`
  color: #313131;
  `
const H3 = styled.h3`
  color: #313131;
  &:hover {
	figure {
		img {
			box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
			transform: scale(1.05);
			}
		}
	}
`