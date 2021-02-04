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

			{movies.map((movie, index) => (
				<PosterWrapper>
					<PosterImage
						key={index}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				</PosterWrapper>
			))}
		</RowWrapper>
	)
}

const RowWrapper = styled.div`
	color: white;
`
const TitleContainer = styled.h2``

const PosterWrapper = styled.div``

const PosterImage = styled.img``

export default Row
