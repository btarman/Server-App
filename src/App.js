import React, { useState } from 'react';
import './index.css';
import HomeComponent from './Home';
import ListenComponent from './Listen';
import HeaderComponent from './Header';
import MerchComponent from './Merch';
import AboutComponent from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// implementing react-router to navigate between components
// HeaderComponent caled first to stick navbar to top of each component

function App() {
	return (
		<Router>
			<HeaderComponent />
			<Switch>
	          
	          <Route path="/listen">
	            <ListenComponent />
	          </Route>
	          <Route path="/merch">
	          	<MerchComponent />
	          </Route>
	          <Route path="/about">
	          	<AboutComponent />
	          </Route>
	          <Route path="/">
	            <HomeComponent />
	          </Route>
	        </Switch>
        </Router>
		)

}
export default App;