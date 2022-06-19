import React from 'react';
/* ------------------------ define the routes within ------------------------ */
import { Routes, Route } from 'react-router-dom';

/* ----------------------- import the different pages ----------------------- */
import AllMeetups from './routes/Allmeetups';
import FavoriteMeetups from './routes/Favorite';
import NewMeetups from './routes/Newmeetups';
import ErrorPage from './routes/Errorpage';
import MainNavigation from './components/Layouts/Navigation';

const App = () => {

	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route path="/" element={ <AllMeetups /> } />
				<Route path="/new-meetup" element={ <NewMeetups /> } />
				<Route path="/favorites" element={ <FavoriteMeetups /> } />
				<Route path="*" element={ <ErrorPage /> } />
			</Routes>
		</div>
	)
}

export default App;
