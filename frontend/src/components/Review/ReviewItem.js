import './Review.css'

const ReviewItem = ({ review }) => {
	return (
		<div className='review-item-container'>
			<div className='review-item-header'>
				<img src='' alt='' className='review-item-profile-icon'/>
				<div className='review-item-name-date'>
					{/* {user.username} */}
					{review?.date}
				</div>
			</div>
			<div className='review-item-body'>
				{review?.body}
			</div>
		</div>
	)
}

export default ReviewItem;