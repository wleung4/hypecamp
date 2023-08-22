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
		return date.format('MMMM DD');
	}

	return (
		<>
			<div className="search-background">
				<div className='search-bar'>
					<input className="search" placeholder="Search destinations"/>
					<button className='search-dates' onClick={() => setCalendar(!calendar)}>
					<i className="fa-solid fa-calendar"></i>
					{startDate && endDate ? `Start: ${formatDate(startDate)} | End: ${formatDate(endDate)}`: 'Add dates'}
						{calendar && (
							<BookingDayPicker 
								startDate={startDate}
								endDate={endDate}
								onDatesChange={onDatesChange}
								onOutsideClick={calendarOutsideClick}
							/>
						)}
					</button>
					<button className='search-guests' onClick={()=> setGuestAdder(!guestAdder)}> 
						Add guests 
						{guestAdder && (
							<GuestAdder />
						)}
					</button>
					<NavLink to='/spots' className='search-button'>Search
					</NavLink>
				</div>
			</div>
		</>
	)

}

export default Search;