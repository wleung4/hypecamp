// import { useDispatch, useSelector } from 'react-redux';
// // import { deactiveSessionModal } from '../../store/uiReducer';
// import './RegisterForm.css'

// // const RegisterForm = ({ closeModal }) => {
// // 	const handleBackgroundClick = e => {
// // 		e.stopPropagation();
// // 		closeModal();
// // 	}

// // 	return (

// // 		<div className="modal">
// // 			<div className="modal-background" onClick={handleBackgroundClick}>

// // 			</div>
// // 			<div className="modal-foreground">
// // 				<h2>Register Form</h2>
// // 			</div>
// // 		</div>
// // 	)
// // }

// // export default RegisterForm;

// const RegisterForm = () => {
// 	const display = useSelector(state => state.ui.sessionModal);
// 	const dispatch = useDispatch();

// 	const handleBackgroundClick = e => {
// 		e.stopPropagation();
// 		dispatch(deactiveSessionModal());
// 	}


// 	if(!display) return null;

// 	return (

// 		<div className="modal">
// 			<div className="modal-background" onClick={handleBackgroundClick}>

// 			</div>
// 			<div className="modal-foreground">
// 				<h2>Register Form</h2>
// 				<form>
// 					<label> Email:
// 						<input></input>
// 					</label> 
// 					<label> Username:
// 						<input></input>
// 					</label>
// 					<label> Password:
// 						<input></input>
// 					</label>
// 				</form>
				
// 			</div>
// 		</div>
// 	)
// }

// export default RegisterForm;