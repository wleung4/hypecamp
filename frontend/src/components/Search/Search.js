import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import BookingDayPicker from '../Booking/BookingDayPicker';
import './Search.css';
import { useState } from 'react';
import GuestAdder from '../Booking/GuestAdder';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchSpots from '../../store/reviewReducer';

const Search = () => {
	const [searchParams, setSearchParams] = useState({});
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [calendar, setCalendar] = useState(false);
	const [guestAdder, setGuestAdder] = useState(false);
	const [adultCounter, setAdultCounter] = useState(1);
	const [childrenCounter, setChildrenCounter] = useState(0);
	const dispatch = useDispatch();
	const history = useHistory();

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

	const handleSearchInput = e => {
		setSearchParams(prev => ({ ...prev, search: e.target.value }))
	}

	const handleSearchButton = e => {
		e.stopPropagation();

		dispatch(fetchSpots(searchParams));
		setSearchParams({});
		history.push('/spots');
	}

	return (
		<>
			<div className="search-background">
				<div className='search-foreground'>
					<div className='search-bar'>
						<i className="fa-solid fa-location-dot" style={{color: '#000000'}}></i>
						<input className="search-bar-input" placeholder="Search a city" 
							value={searchParams.search} onChange={handleSearchInput}/>
					</div>
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
							<GuestAdder onGuestChange={onGuestChange} capacity={20}/>
						)}
					</div>
					<div className='search-button' onClick={handleSearchButton}>
						<i className="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i>
						<p>Search</p>
					</div>
				</div>
			</div>
		</>
	)

}

export default Search;