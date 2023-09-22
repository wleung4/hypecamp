
const RECEIVE_USER = 'RECEIVE_USER';
const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
	type: RECEIVE_USER,
	user
})

const receiveUsers = users => ({
	type: RECEIVE_USERS,
	users
})

export const fetchUser = userId => async dispatch => {
	const res = await fetch(`/api/users/${userId}`);

	if (res.ok) {
		const user = await res.json();
		console.log(user)
		dispatch(receiveUser(user))
	}
} 

export const fetchUsers = () => async dispatch => {
	const res = await fetch('/api/users');

	if(res.ok){
		const users = await res.json();
		dispatch(receiveUsers(users));
	}
}

const userReducer = (state = {}, action) => {
	switch (action.type){
		case RECEIVE_USER:
			return action.user;
		case RECEIVE_USERS:
			return action.users; 
		default:
			return state;
	}
}

export default userReducer;