import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ProfileButton.css';

const ProfileButton = ({ user }) => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = e => {
		e.stopPropagation();
		if (showMenu) return;
		setShowMenu(true);
	}

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		}

		document.addEventListener('click', closeMenu);
		
		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu])

	const logout = e => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	}

	return (
		<>
				{/* <img src={'../../assets/icon.png'} /> */}
			<button onClick={openMenu} >
				<i className="fa-solid fa-user-circle" />
			</button>
			{showMenu && (
				<ul className="profile-dropdown">
					<li>{user.email}</li>
					<li>{user.username}</li>
					<li>Bookings</li>
					<li>
						<Link to="#" onClick={logout}>Log out</Link>
					</li>
				</ul>
			)}
		</>
	)

}

export default ProfileButton;