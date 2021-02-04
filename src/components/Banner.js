import styled from "styled-components"

const BannerHeader = styled.header`
	position: relative;
	height: 448px;
	color: white;
	object-fit: contain;
`
const BannerImage = styled.img`
	background-size: "cover";
	background-position: "center center";
`

const Banner = () => {
	return (
		<BannerHeader>
			<BannerImage src='https://i.imgur.com/e1hLQ2m.png' />
			{/* <BannerContents>
				<BannerTitle>Movie Name</BannerTitle>
				<BannerButtons>
					<Button>Play</Button>
					<Button>My List</Button>
				</BannerButtons>
				<BannerDescription>This is a test</BannerDescription>
			</BannerContents>
			<BannerFadeBottom /> */}
		</BannerHeader>
	)
}

// const BannerContents = styled.div``
// const BannerTitle = styled.h1``
// const BannerButtons = styled.div``
// const Button = styled.button``
// const BannerDescription = styled.div``
// const BannerFadeBottom = styled.div``

export default Banner
