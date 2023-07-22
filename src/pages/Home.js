import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import Users from "../Components/Users/Users";

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  
  useEffect(() => {
    dispatch(userAction())
  }, [dispatch])

  return (
    <div className="w-10/12 mx-auto mt-10 mb-20">
      {loading ? <p>Loading.....</p> : error ? <h2>{error}</h2> : <Users users={users}></Users>}
    </div>
  );
};

export default Home;
