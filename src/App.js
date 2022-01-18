import './App.css';

import React, {Component} from 'react';
import {
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';

import AboutPage from "./pages/AboutPages";
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';

function App() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div>
					<HomePage />
					<Route path="/" component={HomePage} exact />
					<Route path="/about" component={AboutPage} />
					<Route path="/articles-list" component={ArticleList} />
					<Route path="/article:name" component={ArticlePage} />
				</div>
				</div>
			</Router>
		);
	}
export default App;
