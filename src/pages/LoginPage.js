import React from "react"
import styled from "styled-components"

function LoginPage() {
	return (
		<LoginContainer>
			<LoginBackground
				src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
				alt='background image'
			/>
			<Button>Sign In</Button>
		</LoginContainer>
	)
}

const LoginContainer = styled.div`
	position: relative;
	height: 100%;
`

const LoginBackground = styled.img``

const Button = styled.button`
	position: fixed;
	right: 20px;
	top: 20px;
	padding: 10px 20px;
`

export default LoginPage
