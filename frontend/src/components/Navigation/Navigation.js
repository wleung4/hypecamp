import React from "react";
import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormModal from "../LoginForm/LoginFormModal";
import SignupFormModal from "../SignupForm/SignupFormModal";
import './Navigation.css';

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
			<div className="logo">
				{/* <img src={'../../assets/hipcamp-logo.png'} /> */}
				<NavLink exact to='/'>Hypecamp Logo</NavLink>
			</div>
			<div className="links">
				{sessionLinks}
			</div>
		</nav>
		
	)
}

export default Navigation;