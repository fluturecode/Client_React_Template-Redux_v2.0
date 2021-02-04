import styled from "styled-components"
import Home from "./pages/Home"

const App = () => {
	return (
		<AppWrapper>
			<Home />
		</AppWrapper>
	)
}

const AppWrapper = styled.div`
	background: #111;
`
export default App
