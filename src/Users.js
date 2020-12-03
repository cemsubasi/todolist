import React from 'react';
import "./Users.css";

export default function Users({users, userMapping}){

	return(
		users.map((user, index) =>
			<div 
				key={index}
				onClick={()=>userMapping(user)}
				className={user.done ? "done" : null}
			>
				{user.name}
			</div>
		)
	)
}
