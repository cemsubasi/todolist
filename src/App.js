import React from 'react';
import UserList from './UserList';
import './App.css';

export default function App() {
	
    return (
	    <div className="container">
		<h2>To Do List</h2><hr/><br/>
	    	<UserList />
	    </div>
    );
}
