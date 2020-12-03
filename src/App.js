import React, {useState} from 'react';
import {useHook} from './hooks/useHook';
import Users from './Users';
import './App.css';

export default function App() {

	const userList = [];
	const [users, setUsers] = useHook(userList);
	const addToList = user => setUsers([...users, {id: Date.now(), name: user, done: false}]);
	const userDelete = user => setUsers(users.filter(us => !us.done ? [...user] : null));
	const [input, setInput] = useState("");
	const addInput = e => setInput(e.target.value);

    return (
	    <div className="container">
	    <div className="App">
		    <h2>To Do List</h2><hr/><br/>
	    	    <input onChange={addInput} value={input} /><br/><br/>
		    <Users users={users} setUsers={setUsers} /><br/>
	    	    <button className="btn btn-outline-light" onClick={()=> input ? addToList(input) & setInput("") : null } >Add</button>
	    	    <button className="btn btn-outline-light" onClick={userDelete}>Delete</button>
	    </div>
	    </div>
    );
}
