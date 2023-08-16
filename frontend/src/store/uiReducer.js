
const ACTIVATE_SESSION_MODAL = 'ACTIVATE_SESSION_MODAL';

const DEACTIVATE_SESSION_MODAL = 'DEACTIVATE_SESSION_MODAL';

const ACTIVATE_SIGNUP_MODAL = 'ACTIVATE_SIGNUP_MODAL';

const DEACTIVATE_SIGNUP_MODAL = 'DEACTIVATE_SIGNUP_MODAL';

export const activateSessionModal = () => ({
	type: ACTIVATE_SESSION_MODAL	
})

export const deactivateSessionModal = () => ({
	type: DEACTIVATE_SESSION_MODAL
})

export const activateSignupModal = () => ({
	type: ACTIVATE_SIGNUP_MODAL
})

export const deactivateSignupModal = () => ({
	type: DEACTIVATE_SIGNUP_MODAL
})

const uiReducer = (state = { sessionModal: false, signupModal: false }, action) => {
	switch(action.type) {
		case ACTIVATE_SESSION_MODAL:
			return { ...state, sessionModal: true, signupModal: false }
		case DEACTIVATE_SESSION_MODAL:
			return { ...state, sessionModal: false, signupModal: false }
		case ACTIVATE_SIGNUP_MODAL:
			return { ...state, sessionModal: false, signupModal: true }
		case DEACTIVATE_SIGNUP_MODAL:
			return { ...state, sessionModal: false, signupModal: false }
		default:
			return state;
	}
}

export default uiReducer;