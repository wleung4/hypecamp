import {  useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

const BookingDayPicker = ({ startDate, endDate, onDatesChange, calenderOutsideClick}) => {
	const [focusedInput, setFocusedInput] = useState('startDate');

	return (
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
	)
}

export default BookingDayPicker;