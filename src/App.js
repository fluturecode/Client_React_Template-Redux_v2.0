import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

const App = () => {
	const user = null

	return (
		<>
			<Router>
				{!user ? (
					<LoginPage />
				) : (
					<Switch>
						<Route exact path='/'>
							<HomePage />
						</Route>
					</Switch>
				)}
			</Router>
		</>
	)
}

export default App
