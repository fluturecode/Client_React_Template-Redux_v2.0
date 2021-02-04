import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "../axios.js"

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([])

	const base_url = "https://image.tmdb.org/t/p/original/"

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [fetchUrl])

	return (
		<RowWrapper>
			<TitleContainer>{title}</TitleContainer>
			<RowPosters>
				{movies.map((movie) => (
					<PosterImage
						key={movie.id}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</RowPosters>
		</RowWrapper>
	)
}

const RowWrapper = styled.div`
	color: white;
	margin-left: 20px;
`
const TitleContainer = styled.h2``

const RowPosters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;
	&::-webkit-scrollbar {
		display: none;
	}
`
// cost PosterLarge = styled.img`
// max-height: 250px;
// &:hover{
// 	transform: scale(1.09);
// 	opacity: 1
// }`

const PosterImage = styled.img`
	max-height: 100px;
	object-fit: contain;
	margin-right: 10px;
	width: 100%;
	transition: transform 450ms;
	&:hover {
		transform: scale(1.08);
		opacity: 1;
	}
`

export default Row
