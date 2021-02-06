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
			<h2>{title}</h2>
			<RowPosters>
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<PosterImage
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</RowPosters>
		</RowWrapper>
	)
}

const RowWrapper = styled.div`
	color: white;
	margin-left: 20px;
`
const RowPosters = styled.div`
	display: flex;
	padding: 20px;
	/* overflow-y: hidden;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	} */
`
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
