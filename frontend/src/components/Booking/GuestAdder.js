import React, { useEffect, useState } from "react";
import './GuestAdder.css';

const GuestAdder = ({ onGuestChange, capacity }) => {
	const [adultCounter, setAdultCounter] = useState(1);
	const [childrenCounter, setChildrenCounter] = useState(0);

	useEffect(() => {
		onGuestChange(adultCounter, childrenCounter)
	}, [adultCounter, childrenCounter])

	const handlePropagation = (e) => {
		e.stopPropagation();
	}
	return (
		<div className='guest-adder' onClick={handlePropagation}>
			<div className='add-adult'>
				<div>
					Adult <br />
					Ages 13 and above
				</div>

				<div className='add-sub-buttons'>
					<button className='sub-button' onClick={() => adultCounter > 1 ? setAdultCounter(adultCounter - 1) : null}>
						-
					</button>
					<p> {adultCounter} </p>
					<button className='add-button' onClick={() => adultCounter + childrenCounter < capacity ? setAdultCounter(adultCounter + 1) : null}>
						+
					</button>
				</div>
			</div>
			<hr className='horizontal-line'/>
			<div className='add-children'>
				<div>
					Children <br />
					Ages 12 and below
				</div>

				<div className='add-sub-buttons'>
					<button className='sub-button' onClick={() => childrenCounter > 0 ? setChildrenCounter(childrenCounter - 1) : null}>
						-
					</button>
					<p> {childrenCounter} </p>
					<button className='add-button' onClick={() => adultCounter + childrenCounter < capacity ? setChildrenCounter(childrenCounter + 1) : null}>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default GuestAdder;