import './Search.css';

const Search = () => {

	return (
		<>
			<div className="search-background">
				<div className='search-bar'>
					<input className="search" placeholder="Search"/>
					<button className='search-dates'> Add Dates </button>
					<button className='search-guests'> Add Guests </button>
					<button className='search-button'>Search</button>
				</div>
			</div>
		</>
	)

}

export default Search;