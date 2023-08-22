import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import configureStore from './store/store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/sessionReducer';
import * as spotActions from './store/spotReducer';
import { ModalProvider } from './context/Modal';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
	window.store = store;
	window.csrfFetch = csrfFetch;
	window.sessionActions = sessionActions;
	window.spotActions = spotActions;
}

function Root() {
	return (
	  <ModalProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	  </ModalProvider>
	);
}

const renderApplication = () => {
	// const root = ReactDOM.createRoot(document.getElementById('root'));
	const root = document.getElementById('root')
	ReactDOM.render(
		<React.StrictMode>
		  <Root />
		</React.StrictMode>,
		root
	);
}

if (sessionStorage.getItem("currentUser") === null || sessionStorage.getItem("X-CSRF-Token") === null) {
	store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
	renderApplication();
}