import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import './ProfileButton.css';
import icon from '../../assets/icon.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
			<img src={icon} className="icon" onClick={openMenu}/>
			{showMenu && (
				<ul className="profile-dropdown">
					<div className="dropdown-div">
						<li className="li">Account</li>
						<li className="li"><Link to='/bookings' className='bookings-link'>Bookings</Link></li>
						<li className="li" onClick={logout}>Log out</li>
					</div>
				</ul>
			)}
		</>
	)

}

export default ProfileButton;