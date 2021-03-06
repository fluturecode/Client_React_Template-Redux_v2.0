import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

const App = () => {
	return (
		<>
			<Router>
				<LoginPage />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
