import React from 'react';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import './Splash.css';
import heroImage from '../../assets/hero-image.jpg';
import leftImage from '../../assets/splash-image-1.jpg';
import rightImage from '../../assets/splash-image-2.jpg';


const Splash = () => {
	return (
		<>
			<div className='background'>
				<div className='splash-text-div'>
					<h1 className='splash-text-header'>
						Find yourself outside.
					</h1>
					<h2 className='splash-text-sub'>
						<p>Book beautiful and relaxing camping</p>
						<p>spots—only on Hypecamp.</p>
					</h2>
				</div>

				<div className='search-div'>
					<Search />
				</div>

				<div className='hero-image-container'>
					<img src={heroImage} alt='' className='hero-image' />
				</div>

				<div className='splash-images-container'>
					<img src={leftImage} alt='' className='splash-images' />
					<img src={rightImage} alt='' className='splash-images' />
				</div>

			</div>
		</>

	);
}

export default Splash;