import React from "react";
import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormModal from "../LoginForm/LoginFormModal";

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
				<NavLink to='/signup'>Sign Up</NavLink>
			</>
		)
	}

	return (
		<ul>
			<li>
				<NavLink exact to='/'>Home</NavLink>
				{sessionLinks}
			</li>
		</ul>
	)
}

export default Navigation;