import React, { useState, useEffect } from "react";
import * as getProfileAction from "./../actions/profile.action";
import { useDispatch, connect, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction.getProfile());
  }, [dispatch]);
  const getProfileReducer = useSelector(
    ({ getProfileReducer }) => getProfileReducer
  );

  const showProfile = getProfileReducer.result ? (
    getProfileReducer.result.map((Product) => {
      return (
        <div>
          <div className="w-full bg-gray-100 h-64 rounded-lg mb-10 z-0">
            <img
              src={Product.bg}
              alt="back"
              className="h-full w-full rounded relative "
            />
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row mb-10 items-center">
              <div>
                <img
                  src={Product.avatar}
                  alt="Avata"
                  className="bg-gray-100 w-40 h-40 rounded-full -mt-32 z-10 relative"
                />
              </div>
      <h1 className="ml-10 text-gray-600 text-3xl">{Product.username}</h1>
            </div>
            <div className="justify-center flex flex-row mt-10">
              <button className="focus:outline-none hover:bg-gray-100 flex flex-row items-center mr-10 justify-center bg-transparent border h-12 text-2xl text-gray-600 rounded-lg w-40">
                <span className="fas fa-user-cog mr-4 text-gray-600"></span>
                <h1>ตั้งค่า</h1>
              </button>
              <h1 className="material-icons text-gray-600 mt-3">share</h1>
            </div>
          </div>
          <button className="focus:outline-none flex flex-row items-center justify-center mb-10 hover:bg-blue-300 bg-blue-500 h-12 text-2xl text-white rounded w-40">
            <span className="fab fa-facebook-square mr-2"></span>
            <h1>Facebook</h1>
          </button>
        </div>
      );
    })
  ) : (
    //!---------------------------------------------------------------------------------------------------------------------------------------------
    <div>
      <div className="w-full bg-gray-100 h-64 rounded-lg mb-10 z-0">
        <img
          src="/profile.png"
          alt="back"
          className="h-full w-full rounded relative "
        />
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row mb-10 items-center">
          <div>
            <img
              src="/avatar.jpg"
              alt="Avata"
              className="bg-gray-100 w-40 h-40 rounded-full -mt-32 z-10 relative"
            />
          </div>
          <h1 className="ml-10 text-gray-600 text-3xl">ชื่อเจ้าของ</h1>
        </div>
        <div className="justify-center flex flex-row mt-10">
          <button className="focus:outline-none hover:bg-gray-100 flex flex-row items-center mr-10 justify-center bg-transparent border h-12 text-2xl text-gray-600 rounded-lg w-40">
            <span className="fas fa-user-cog mr-4 text-gray-600"></span>
            <h1>ตั้งค่า</h1>
          </button>
          <h1 className="material-icons text-gray-600 mt-3">share</h1>
        </div>
      </div>
      <button className="focus:outline-none flex flex-row items-center justify-center mb-10 hover:bg-blue-300 bg-blue-500 h-12 text-2xl text-white rounded w-40">
        <span className="fab fa-facebook-square mr-2"></span>
        <h1>Facebook</h1>
      </button>
    </div>
  );
  return (
    <div>
      <h1 className="text-4xl my-5">โปรไฟล์</h1>
      {showProfile}
      <hr />
    </div>
  );
};
const mapStateToProps = ({ getProfileReducer }) => ({ getProfileReducer });

const mapDispatchToProps = {
  getProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
