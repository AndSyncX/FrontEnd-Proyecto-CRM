import { useEffect, useState } from "react";
import { getUsers } from "../api/Users";

function Users() {
    const [users, setUsers] =useState([]);
    
    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers();
            setUsers(data);
        }
        fetchUsers();
    }, [])

    return(
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Lista de Usuarios</h1>
            <div className="grid grid-cols-1 gap-4">
                {users.map((user) => (
                <div key={user.id} className="p-4 bg-gray-100 rounded shadow">
                    <h2 className="text-xl font-semibold">{user.username}</h2>
                    <p>Password: {user.password}</p>
                    <p>Role: {user.role}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Users;