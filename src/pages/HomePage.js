import React from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Row from "../components/Row"
import requests from "../requests"

const Home = () => {
	return (
		<HomeWrapper>
			<Nav />
			<Banner />
			<Row
				title='FLUTUREFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horrow Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</HomeWrapper>
	)
}
const HomeWrapper = styled.div``

export default Home
