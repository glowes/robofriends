import React from 'react'


const Card = (props) => {
	//destructuring
	const {id,name,username,email} = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img alt ="profile_picture" src={`https://robohash.org/${id}?200x200`}/>
				<div>
					<h2>{username}</h2>
					<p>{name}</p>
					<p>{email}</p>
				</div>
			</div>
		</div>
		);
}

export default Card;