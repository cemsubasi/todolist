import React, {useState, useEffect} from 'react';
import Users from './Users';
import './App.css';

export default function UserList(){

	const userList = [];
	const localItems = JSON.parse(localStorage.getItem("localItems"));
	const [users, setUsers] = useState(localItems || userList);
	const userMapping = user => setUsers(users.map(us => user.id === us.id ? {...us, done: !us.done} : us));
	const addToList = user => setUsers([...users, {id: Date.now(), name: user, done: false}]);
	const userDelete = user => setUsers(users.filter(us => !us.done ? [...user] : null));
	const [input, setInput] = useState("");
	const addInput = e => setInput(e.target.value);

	useEffect(() => localStorage.setItem("localItems", JSON.stringify(users)),[users]);

	return(
	    <div className="App">
		    <input onChange={addInput} value={input} /><br/><br/>
		    <Users users={users} userMapping={userMapping} /><br/>
		    <button className="btn btn-outline-light" onClick={()=> input ? addToList(input) & setInput("") : null } >Add</button>
		    <button className="btn btn-outline-light" onClick={userDelete}>Delete</button>
	    </div>
	)
}
