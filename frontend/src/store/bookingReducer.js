
const RECEIVE_BOOKING = 'RECEIVE_BOOKING'; //create edit show
const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'; // 
const REMOVE_BOOKING = 'REMOVE_BOOKING'; // destroy

const receiveBooking = booking => ({
	type: RECEIVE_BOOKING,
	booking
})

const receiveBookings = bookings => ({
	type: RECEIVE_BOOKINGS,
	bookings
})

const removeBooking = bookingId => ({
	type: REMOVE_BOOKING,
	bookingId
})

export const fetchBooking = bookingId => async dispatch => {
	const res = await fetch(`/api/bookings/${bookingId}`);

	if(res.ok) {
		const booking = await res.json();
		dispatch(receiveBooking(booking));
	}
}

export const fetchBookings = () => async dispatch => {
	const res = await fetch('/api/bookings');

	if(res.ok) {
		const bookings = await res.json();
		dispatch(receiveBookings(bookings));
	}
}

export const createBooking = booking => async dispatch => {
	const res = await fetch('/api/bookings', {
		method: 'POST',
		body: JSON.stringify(booking),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	
	if(res.ok) {
		const newBooking = await res.json();
		dispatch(receiveBooking(newBooking));
	}
}

export const updateBooking = booking => async dispatch => {
	const res = await fetch(`/api/bookings/${booking.id}`, {
		method: 'PATCH',
		body: JSON.stringify(booking),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	if(res.ok){
		const updatedBooking = await res.json();
		dispatch(receiveBooking(updatedBooking));
	}
}

export const deleteBooking = bookingId => async dispatch => {
	const res = await fetch(`/api/bookings/${bookingId}`, {
		method: 'DELETE'
	})
	
	if(res.ok) {
		dispatch(removeBooking(bookingId));
	}
}

const bookingReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_BOOKING:
			return { ...state, [action.booking.id]: action.booking };
		case RECEIVE_BOOKINGS:
			return { ...action.bookings };
		case REMOVE_BOOKING:
			const nextState = { ...state };
			delete nextState[action.bookingId];
			return nextState;
		default:
			return state;
	}
}

export default bookingReducer;