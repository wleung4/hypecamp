import './Review.css';

const ReviewForm = ({ onClose }) => {
	const [reviewInfo, setReviewInfo] = ({});

	const handleSubmit = e => {
		e.preventDefault();
	}

	return (
		<div className='review-form-container'>
			<h3 className='review-form-head'>Add a review</h3>
			<div className='review-options'>
				<div className='review-recommendation'>Recommended</div>
				<div className='review-recommendation'>Not Recommended</div>
			</div>
			<textarea className='review-text-area'/>
			<button className='review-create-review'>Create review</button>
		</div>
	)
}

export default ReviewForm;