import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
