import React, { useState } from "react"
import styled from "styled-components"
import SignUpPage from "./SignUpPage"

function LoginPage() {
	const [signUp, setSignUp] = useState(false)

	return (
		<LoginContainer>
			<LoginLogo
				src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
				alt='flutureflix logo'
			/>
			<LoginButton onClick={() => setSignUp(true)}>Sign In</LoginButton>
			<LoginScreenGradient />
			<LoginScreenBody>
				{signUp ? (
					<SignUpPage />
				) : (
					<>
						<h1>Unlimited films, TV programs and more.</h1>
						<h2>Watch anywhere. Canel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<LoginScreenInput>
							<form>
								<input type='email' placeholder='Email Address' />
								<GetStartedButton onClick={() => setSignUp(true)}>
									GET STARTED
								</GetStartedButton>
							</form>
						</LoginScreenInput>
					</>
				)}
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

const LoginScreenBody = styled.div`
	position: absolute;
	top: 30%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	z-index: 1;
	color: #fff;
	padding: 20px;

	h1 {
		font-size: 3.125rem;
		margin-bottom: 20px;
	}
	h2 {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 30px;
	}
	h3 {
		font-size: 1.3rem;
		font-weight: 400;
	}
`
const LoginScreenInput = styled.div`
	form {
		input {
			padding: 10px;
			outline-width: 0;
			height: 30px;
			width: 30%;
			border: none;
			max-width: 600px;
		}
	}
`
const GetStartedButton = styled.button`
	padding: 16px 20px;
	font-size: 1rem;
	color: #fff;
	background-color: #e50914;
	border: none;
	font-weight: 600;
	cursor: pointer;
`

export default LoginPage
