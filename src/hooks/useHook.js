import {useState, useEffect} from 'react';

export const useHook = (arg) =>{
	const localItems = JSON.parse(localStorage.getItem("localItems"));
	const [users, setUsers] = useState(localItems || arg);
	const userMapping = user => setUsers(users.map(us => user.id === us.id ? {...us, done: !us.done} : us));

	useEffect(() => localStorage.setItem("localItems", JSON.stringify(users)),[users]);

	return [users, userMapping];
}
