import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setName(response.data.name);
    } catch (error) {
      console.error('Có lỗi khi lấy bài viết người dùng:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name });
    } else {
      await axios.post('https://jsonplaceholder.typicode.com/users', { name });
    }
    navigate('/users');
  };

  return (
    <div className="container mx-auto max-w-md p-4 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">{id ? 'Edit User' : 'Tạo người dùng'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 text-white font-semibold rounded ${id ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {id ? 'Cập Nhật' : 'Tạo Mới'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
