import React from 'react';
import Card  from './Card'; 

const CardList = ({robots}) => {

	//const {id,name,email} = robots;
	const cardComponent   = robots.map((user,id)=> {

		return <Card key = {id} 
					 id={user.id} 
					 name={user.name} 
					 username={user.username} 
					 email={user.email}/>
      		
	})

	return (

			<div>
				{cardComponent}
      		</div>

		)
}
export default CardList;