import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">User List</h1>
      <div className="flex justify-end mb-4">
        <Link
          to="/create/user"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Tạo người dùng
        </Link>
      </div>
      <ul className="space-y-4">
        {users.map(user => (
          <li
            key={user.id}
            className="bg-white p-4 shadow-md rounded flex justify-between items-center"
          >
            <span className="font-semibold">{user.name}</span>
            <div className="flex space-x-2">
              <Link
                to={`/edit/${user.id}`}
                className="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500"
              >
                Sửa
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
