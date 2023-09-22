import { useEffect, useState } from 'react';
import './Review.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviewReducer';
import { useParams } from 'react-router-dom';
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm/LoginForm";

const ReviewForm = ({ onClose }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [reviewBody, setReviewBody] = useState('');
	const { spotId } = useParams();
	const [loginModal, setLoginModal] = useState(false);
	const user = useSelector(state => state.session.user);
	const dispatch = useDispatch();

	const handleOnClose = () => {
		setLoginModal(false)
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (user && selectedOption >= 0 && reviewBody.length > 0) {
			dispatch(createReview({
				spot_id: spotId,
				user_id: user.id,
				rating: selectedOption,
				body: reviewBody
			}));
			setSelectedOption(null);
			setReviewBody('')
			onClose();
		} else {
			setLoginModal(true);
		}
	}

	
	return (
		<>
			<div className='review-form-container'>
				<h3 className='review-form-head'>Add a review</h3>
				<div className='review-options'>
					<div className={`review-recommendation good-recommend ${selectedOption === 100 ? 'good-selected' : ''}`} 
						onClick={() => setSelectedOption(100)}>Recommended</div>
					<div className={`review-recommendation bad-recommend ${selectedOption === 0 ? 'bad-selected' : ''}`} 
						onClick={() => setSelectedOption(0)}>Not Recommended</div>
				</div>
				<textarea className='review-text-area' onChange={e => setReviewBody(e.target.value)} placeholder='Enter review here'/>
				<button className='review-create-review' onClick={handleSubmit}>Create review</button>
			</div>
			{loginModal && !user && (
				<Modal onClose={handleOnClose}>
					<LoginForm onClose={handleOnClose} />
				</Modal>
			)}
		</>
	)
}

export default ReviewForm;