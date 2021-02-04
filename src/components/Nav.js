import styled from "styled-components"

const Nav = () => {
	return (
		<NavWrapper>
			<NavContents>
				<NavLogo src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
				<NavAvatar src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' />
			</NavContents>
		</NavWrapper>
	)
}
const NavWrapper = styled.div`
	position: fixed;
	top: 0;
	padding: 20px;
	width: 100%;
	height: 30px;
	z-index: 1;
	background-color: black;
	/* Animations */
	/* transition-timing-function: ease-in;
  transition: all 0.5s; */
`
const NavContents = styled.div`
	display: flex;
	justify-content: space-between;
`
const NavLogo = styled.img`
	position: fixed;
	top: 10px;
	left: 0;
	width: 100px;
	object-fit: contain;
	padding-left: 20px;
	cursor: pointer;
`
const NavAvatar = styled.img`
	position: fixed;
	border-radius: 2px;
	right: 20px;
	width: 32px;
	cursor: pointer;
`

export default Nav
