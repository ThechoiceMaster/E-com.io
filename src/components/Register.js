import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as registerAction from "./../actions/register.action";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [Account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div className="flex mt-20 justify-center">
      <div className="shadow-lg w-1/2 flex justify-center">
        <form
          className="bg-white rounded  m-20 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerAction.register({ ...Account, ...props }));
          }}
        >
          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="email"
              placeholder="email"
              value={Account.email}
              onChange={(e) => {
                setAccount({
                  ...Account,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="name"
              value={Account.username}
              onChange={(e) => {
                setAccount({
                  ...Account,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              value={Account.password}
              onChange={(e) => {
                setAccount({
                  ...Account,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              สมัคสมาชิค
            </button>
            <Link to="/login">
              <h1 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
                เข้าสู่ระบบ?
              </h1>
            </Link>
          </div>
          <p className="text-center text-gray-500 text-xs mt-10">
            ©2020 E-com. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
}
