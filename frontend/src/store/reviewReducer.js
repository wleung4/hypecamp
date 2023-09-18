
const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
	type: RECEIVE_REVIEW,
	review
})

const receiveReviews = reviews => ({
	type: RECEIVE_REVIEWS,
	reviews
})

const removeReview = reviewId => ({
	type: REMOVE_REVIEW,
	reviewId
})

export const getReviews = state => state.reviews ? state.reviews : null;

export const getReview = reviewId => state => state.reviews ? state.reviews[reviewId] : null;

export const fetchReview = reviewId => async dispatch => {
	const res = await fetch(`/api/reviews/${reviewId}`);

	if (res.ok) {
		const review = await res.json();
		dispatch(receiveReview(review));
	}
}

export const fetchReviews = () => async dispatch => {
	const res = await fetch('/api/reviews');

	if(res.ok) {
		const reviews = await res.json();
		dispatch(receiveReviews(reviews));
	}
}

export const createReview = review => async dispatch => {
	const res = await fetch('/api/reviews', {
		method: 'POST',
		body: JSON.stringify(review),
		headers: {
			'Content-Type': 'application/json',
			'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
		}
	})

	if (res.ok) {
		const newReview = await res.json();
		dispatch(receiveReview(newReview));
	}
}

export const updateReview = review => async dispatch => {
	const res = await fetch(`/api/reviews/${review.id}`, {
		method: 'PATCH',
		body: JSON.stringify(review),
		headers: {
			'Content-Type': 'application/json',
			'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
		}
	})

	if (res.ok) {
		const updatedReview = await res.json();
		dispatch(receiveReview(updatedReview));
	}
}

export const deleteReview = reviewId => async dispatch => {
	const res = await fetch(`/api/reviews/${reviewId}`, {
		method: 'DELETE',
		headers: {
			'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
		}
	})

	if (res.ok) {
		dispatch(removeReview(reviewId));
	}
}

const reviewReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_REVIEW:
			return { ...state, [action.review.id]: action.review };
		case RECEIVE_REVIEWS:
			return { ...action.reviews };
		case REMOVE_REVIEW:
			const nextState = { ...state };
			delete nextState[action.reviewId];
			return nextState; 
		default:
			return state;
	}
}

export default reviewReducer;
