
const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpots = spots => ({
	type: RECEIVE_SPOTS,
	spots
})

export const receiveSpot = spot => ({
	type: RECEIVE_SPOT,
	spot
})

export const getSpots = state => state.spots ? state.spots : null;

export const getSpot = spotId => state => state.spots ? state.spots[spotId] : null;


export const fetchSpots = () => async dispatch => {
	const res = await fetch('/api/spots');
	
	if(res.ok) {
		const spots = await res.json();
		dispatch(receiveSpots(spots));
	}
}

export const fetchSpot = spotId => async dispatch => {
	const res = await fetch(`/api/spots/${spotId}`);

	if(res.ok) {
		const spot = await res.json();
		dispatch(receiveSpot(spot));
	}
}

const spotReducer = (state = {}, action) => {
	switch(action.type) {
		case RECEIVE_SPOTS:
			return { ...action.spots };
		case RECEIVE_SPOT:
			return { ...state, [action.spot.id]: action.spot };
		default:
			return state;
	}

}

export default spotReducer;