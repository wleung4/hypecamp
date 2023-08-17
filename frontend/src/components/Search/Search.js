import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Search.css';

const Search = () => {

	return (
		<>
			<div className="search-background">
				<div className='search-bar'>
					<input className="search" placeholder="Search destinations"/>
					<label className='search-dates'> Add dates </label>
					<label className='search-guests'> Add guests </label>
					<NavLink to='/spots' className='search-button'>Search</NavLink>
				</div>
			</div>
		</>
	)

}

export default Search;