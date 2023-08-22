import {  useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './BookingDayPicker.css';
import moment from "moment";

const BookingDayPicker = ({ startDate, endDate, onDatesChange, calenderOutsideClick}) => {
	const [focusedInput, setFocusedInput] = useState('startDate');

	const handleClear = () => {
		onDatesChange(null, null);
	}

	return (
		<div className='calender'>
			<DayPickerRangeController
				startDate={startDate} 
				endDate={endDate}
				onDatesChange={({ startDate, endDate }) => {
					onDatesChange(startDate, endDate)}
				}
				focusedInput={focusedInput || 'startDate'} 
				onFocusChange={focusedInput => setFocusedInput(focusedInput)} 
				numberOfMonths={2}
				minimumNights={0}
				isOutsideRange={day => (moment().diff(day) > 0)}
				// onOutsideClick={calenderOutsideClick}
			/>
			<button className="clear-button" onClick={handleClear}>Clear</button>
		</div>
	)
}

export default BookingDayPicker;