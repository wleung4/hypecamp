import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Spot.css';
import { useParams } from 'react-router-dom';
import { fetchSpot, getSpot } from '../../store/spotReducer';
import { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import BookingDayPicker from '../Booking/BookingDayPicker';

const SpotShow = () => {
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const spot = useSelector(getSpot(spotId));
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [calender, setCalender] = useState(false);

	useEffect(() => {
		dispatch(fetchSpot(spotId));
	}, [spotId])

	const onDatesChange = (startDate, endDate) => {
		console.log(startDate)
		console.log(endDate)
		setStartDate(startDate);
		setEndDate(endDate);
	}

	const calenderOutsideClick = () => {
		setCalender(false)
	}

	const formatDate = date => {
		return date.format('MMMM DD');
	}
	return (
		<>
			<Navigation />
			<div className='show-page'>
				<div className='header-info'>
					<h2 className='show-header'>{spot?.name}</h2>
					<div className='show-header-text'>
						<i className="fa-solid fa-thumbs-up" style={{fontSize: '20px'}}></i>
						<p className='percentage'>100%</p> 
						<p className='num-reviews'>42 reviews</p>
						<p className='city-state'>{spot?.city}, {spot?.state}</p>
					</div>
				</div>

				<div className='show-photos'>
					{/* <div className='big-photo'>
					</div> */}
					<img src={photo} alt='' className='main-photo'/>
					<div className='other-photos'>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
						<img src={photo} alt='' className='secondary-photos'/>
					</div>
				</div>

				<div className='show-description-amenities'>
					<p className='show-description'>
						{spot?.description}
					</p>
					<div className='show-activities'>Activities</div>
					<div className='show-amenities'>Amenities</div>
				</div>
				
				<div className='bookings'>
					<p className='text'>Book this Spot</p>
					<div className='bookings-data'>
						<button className='bookings-dates' onClick={() => setCalender(!calender)}>
							<i class="fa-solid fa-calendar"></i>
							{startDate && endDate ? `Start Date: ${formatDate(startDate)} | End Date: ${formatDate(endDate)}`: 'Add dates'}
							{calender && (
								<BookingDayPicker 
									startDate={startDate}
									endDate={endDate}
									onDatesChange={onDatesChange}
									onOutsideClick={calenderOutsideClick}
								/>
							)}
						</button>
						<button className='bookings-num-guests'>
							<i class="fa-solid fa-user"></i>
							Add guests
						</button>
						<button className='bookings-submit'>
							<i class="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i>
							Book now
						</button>
					</div>
						
				</div>

				<div className='show-map'>
					<h2 className='map-head'>Map</h2>
				</div>

				<div className='show-reviews'>
					<h2 className='reviews-head'>Reviews</h2>
				</div>
			</div>
		</>
	)
}

export default SpotShow;