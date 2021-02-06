import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/Home"

const App = () => {
	return (
		<AppWrapper>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</AppWrapper>
	)
}

const AppWrapper = styled.div`
	background: #111;
`
export default App
