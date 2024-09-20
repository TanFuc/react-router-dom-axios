import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import UserForm from "../../components/User/UserForm";
import UserList from "../../components/User/UserList";
import PostList from "../../components/Post/PostList";
import PostForm from "../../components/Post/PostForm";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-400 min-h-screen font-bold">
        <nav className="p-4 fixed top-0 left-0 w-full z-10">
          <div className="container mx-auto flex justify-center items-center">
            <div className="flex space-x-4">
              <Link to="/users" className="text-white hover:text-black">
                Users
              </Link>
              <Link to="/posts" className="text-white hover:text-black">
                Posts
              </Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          <Routes>
            <Route path="/posts" element={<PostList />} />
            <Route path="/create/post" element={<PostForm />} />
            <Route path="/update/:id" element={<PostForm />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/create/user" element={<UserForm />} />
            <Route path="/edit/:id" element={<UserForm />} />

          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navbar;
