import React from 'react';
import "./Users.css";

export default function Users({users, setUsers}){

	return(
		users.map((user, index) =>
			<div 
				key={index}
				onClick={()=>setUsers(user)}
				className={user.done ? "done" : null}
			>
				{user.name}
			</div>
		)
	)
}
