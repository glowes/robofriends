import React from 'react'


const SearchBox = (searchInput) => {

	const {searchChange} = searchInput;
	return (
		<div className="pa2">
			<input className ="pa3 ba b--green bg-lighest-blue"
			 	   type="search"
			 	   placeholder="search robots"
			 	   onChange={searchChange} //onChange é um funçao de evento no html e este quando mudado envio o resultado para o estado do programa
			 	   />

		</div>
		)
}

export default SearchBox;