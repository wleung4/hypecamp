import React from "react";
import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormModal from "../LoginForm/LoginFormModal";
import SignupFormModal from "../SignupForm/SignupFormModal";
import './Navigation.css';
import logo from '../../assets/hypecamp.png';

const Navigation = () => {
	const sessionUser = useSelector(state => state.session.user);
	
	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<ProfileButton user={sessionUser} />
		)
	} else {
		sessionLinks = (
			<>
				<LoginFormModal />
				<SignupFormModal />
			</>
		)
	}

	return (
		<nav className="navbar">
			<NavLink exact to='/'>
				<img src={logo} className="nav-logo"/>
			</NavLink>
			<div className="links">
				{sessionLinks}
			</div>
		</nav>
		
	)
}

export default Navigation;