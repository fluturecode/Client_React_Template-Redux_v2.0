import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

const App = () => {
	return (
		<AppWrapper>
			<Router>
				(!user ? (
				<LoginPage />
				): (
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				))
			</Router>
		</AppWrapper>
	)
}

const AppWrapper = styled.div`
	background: #111;
`
export default App
