import React from "react";
import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
				<NavLink to='/login'>Log in</NavLink>
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