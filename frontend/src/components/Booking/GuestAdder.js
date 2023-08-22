import React, { useState } from "react";
import './GuestAdder.css';

const GuestAdder = () => {

	return (
		<div className='guest-adder'>
			<div className='add-adult'>
				<div>
					Adult <br />
					Ages 13 and above
				</div>

				<div className='add-sub-buttons'>
					<button className='add-button'>
						-
					</button>
					<p> 0 </p>
					<button className='sub-button'>
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
					<button className='add-button'>
						-
					</button>
					<p> 0 </p>
					<button className='sub-button'>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default GuestAdder;