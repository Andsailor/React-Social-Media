// React-router ecosystem imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles imports
import './App.css';

// Component imports
import Nav from './components/Nav/Nav';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Nav />
				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path="/dialogs/*"
							element={<DialogsContainer />}
						/>
						<Route
							path="/profile/:userId?"
							element={<ProfileContainer />}
						/>
						<Route
							path="/users"
							element={<UsersContainer />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
