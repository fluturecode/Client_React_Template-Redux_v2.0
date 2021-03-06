import React from "react"
import styled from "styled-components"

function LoginPage() {
	return (
		<LoginContainer>
			<LoginLogo
				src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
				alt='flutureflix logo'
			/>
			<LoginButton>Sign In</LoginButton>
			<LoginScreenGradient />
			<LoginScreenBody>
				<>
					<h1>Unlimited films, TV programs and more.</h1>
				</>
			</LoginScreenBody>
		</LoginContainer>
	)
}

const LoginContainer = styled.div`
	position: relative;
	height: 100%;
	background: url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
		center no-repeat;
	background-size: cover;
`
const LoginLogo = styled.img`
	position: fixed;
	left: 0;
	width: 150px;
	object-fit: contain;
	padding-left: 20px;
`

const LoginButton = styled.button`
	position: fixed;
	right: 20px;
	top: 20px;
	padding: 10px 20px;
	font-size: 1rem;
	color: #fff;
	background-color: #e50914;
	font-weight: 600;
	border: none;
	cursor: pointer;
`
const LoginScreenGradient = styled.div`
	width: 100%;
	z-index: 1;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	background-image: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.8) 0,
		rgba(0, 0, 0, 0) 60%,
		rgba(0, 0, 0, 0.8) 100%
	);
`

const LoginScreenBody = styled.div``

export default LoginPage
