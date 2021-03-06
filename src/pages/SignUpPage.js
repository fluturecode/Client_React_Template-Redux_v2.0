import styled from "styled-components"

function SignUpPage() {
	return (
		<SignUpContainer>
			<FormContainer>
				<h1>Sign In</h1>
				<input placeholder='Email' type='email' />
				<input placeholder='Password' type='password' />
				<FormButton type='submit'>Sign In</FormButton>
				<h4>Heading 4</h4>
			</FormContainer>
		</SignUpContainer>
	)
}

const SignUpContainer = styled.div`
	max-width: 300px;
	padding: 70px;
	margin-left: auto;
	margin-right: auto;
	background: rgba(0, 0, 0, 0.85);
`

const FormContainer = styled.form`
	display: grid;
	flex-direction: column;
	h4 {
	}
`

const FormButton = styled.button``

export default SignUpPage
