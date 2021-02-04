import styled from "styled-components"

const Banner = () => {
	const truncate = (string, n) => {
		return string?.length > n ? string.substring(0, n - 1) + "..." : string
	}
	return (
		<BannerHeader
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
				backgroundPosition: "center center",
			}}>
			<BannerContents>
				<BannerTitle>Movie Name</BannerTitle>
				<BannerButtons>
					<BannerButton>Play</BannerButton>
					<BannerButton>My List</BannerButton>
				</BannerButtons>
				<BannerDescription>
					{truncate(
						`This is a test..........This is a test..........This is a test..........This is a test..........This is a test..........This is a test..........`,
						150
					)}
				</BannerDescription>
			</BannerContents>
			<BannerFadeBottom />
		</BannerHeader>
	)
}
const BannerHeader = styled.header`
	position: relative;
	height: 448px;
	color: white;
	object-fit: contain;
`
const BannerContents = styled.div`
	margin-left: 30px;
	padding-top: 140px;
	height: 190px;
`
const BannerTitle = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	padding-bottom: 0.3rem;
`
const BannerButtons = styled.div``
const BannerButton = styled.button`
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 0.2vw;
	padding-left: 2rem;
	padding-right: 2rem;
	margin-right: 1rem;
	padding-top: 0.5rem;
	background-color: rgba(51, 51, 51, 0.5);
	padding-bottom: 0.5rem;
	&:hover {
		color: #000;
		background-color: #e6e6e6;
		transition: all 0.2s;
	}
`
const BannerDescription = styled.div`
	width: 45rem;
	line-height: 1.3;
	padding-top: 1rem;
	font-size: 0.8rem;
	max-width: 360px;
	height: 80px;
`
const BannerFadeBottom = styled.div`
	height: 7.4rem;
	background-image: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.61),
		#111
	);
`

export default Banner
