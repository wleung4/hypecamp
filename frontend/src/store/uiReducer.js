
export const activateSessionModal = () => ({
	type: 'ACTIVATE_SESSION_MODAL'
})

export const deactiveSessionModal = () => ({
	type: 'DEACTIVATE_SESSION_MODAL'
})


const uiReducer = (state = { sessionModal: false }, action) => {
	switch(action.type) {
		case 'ACTIVATE_SESSION_MODAL':
			return { ...state, sessionModal: true};
		case 'DEACTIVATE_SESSION_MODAL':
			return { ...state, sessionModal: false};
		default:
			return state;
	}

}

export default uiReducer;