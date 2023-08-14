import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/index';
import { activateSessionModal, deactiveSessionModal } from './store/uiReducer';

const store = configureStore();

window.store = store;
window.activate = activateSessionModal;
window.deactivate = deactiveSessionModal;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<Root />
  </React.StrictMode>,
);

function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
    			<App />
			</BrowserRouter>
		</Provider>
	)
}
