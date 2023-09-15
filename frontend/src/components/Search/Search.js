import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import BookingDayPicker from '../Booking/BookingDayPicker';
import './Search.css';
import { useState } from 'react';
import GuestAdder from '../Booking/GuestAdder';

const Search = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [calendar, setCalendar] = useState(false);
	const [guestAdder, setGuestAdder] = useState(false);
	const [adultCounter, setAdultCounter] = useState(1);
	const [childrenCounter, setChildrenCounter] = useState(0);

	const onDatesChange = (startDate, endDate) => {
		console.log(startDate)
		console.log(endDate)
		setStartDate(startDate);
		setEndDate(endDate);
	}

	const calendarOutsideClick = () => {
		setCalendar(false)
	}

	const formatDate = date => {
		return date.format('MMM DD');
	}

	const onGuestChange = (adults, children) => {
		setAdultCounter(adults);
		setChildrenCounter(children);
	}

	const handleDates = () => {
		setCalendar(!calendar);
		if(guestAdder) setGuestAdder(!guestAdder);
	}

	const handleGuests = () => {
		setGuestAdder(!guestAdder);
		if(calendar) setCalendar(!calendar);
	}

	return (
		<>
			<div className="search-background">
				<div className='search-bar'>
					<input className="search-bar-input" placeholder="Search destinations"/>
					<div className='search-dates' onClick={handleDates}>
						<i className="fa-solid fa-calendar"></i>
						<p>{startDate && endDate ? `Start: ${formatDate(startDate)} | 
							End: ${formatDate(endDate)}`: 'Add dates'}</p>
							{calendar && (
								<BookingDayPicker 
									startDate={startDate}
									endDate={endDate}
									onDatesChange={onDatesChange}
									onOutsideClick={calendarOutsideClick}
								/>
							)}
					</div>
					<div className='search-guests' onClick={handleGuests}> 
						<i className="fa-solid fa-user" ></i>
						<p>{adultCounter + childrenCounter} guests </p>
						{guestAdder && (
							<GuestAdder onGuestChange={onGuestChange}/>
						)}
					</div>
					<NavLink to='/spots' className='search-button'>
						<i className="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i>
						<p>Search</p>
					</NavLink>
				</div>
			</div>
		</>
	)

}

export default Search;