import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home.jsx'
import Layout from './component/layout/layout.jsx'
import Login from './component/login/login.jsx'

export default class App extends React.Component {
	render(){
		return(
			<div>
				<Router>
					<Switch>
						<Route path="/login" component={ Login } />
						<Layout>
							<Switch>
								<Route path="/" component={ Home } />
							</Switch>
						</Layout>
					</Switch>
				</Router>
			</div>
		)
	}
}