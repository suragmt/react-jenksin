import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateName,
  userSelector,
  fetchUserList,
  fetchUserById,
  useFetchPostsQuery,
  selectAll,
  useGetPostQuery,
  useAddNewPostMutation,
} from "./userSlice";
import { nanoid } from "@reduxjs/toolkit";
import Signup from "./signup";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import BootSample from "./BootSample";
export default function User() {
  const dispatch = useDispatch();
  //   const userData = useSelector(userSelector);
//   const posts = useFetchPostsQuery();
//   const singlePost = useGetPostQuery("1");
//   const [addNewPost, { isLoading }] = useAddNewPostMutation();
//   console.log(singlePost);
//   const  details  = useLoaderData();
//   console.log(details,"details")
  const navigate = useNavigate()
  const count = useSelector(state=> state.count)
  //   const list = useSelector((state) => state.user.list);
  return (
    <>
      <Link to={"/counter/user"}>go to counter</Link>
<button onClick={()=>{navigate(-1)}}>go back</button>
      <Signup />
      {/* <div>User, {userData.name}</div> */}
      <button
        onClick={() => {
        //   dispatch(updateName("surag", "kozhikode", "karnataka"));
        dispatch({type: 'add', payload: 10})
        }}
      >
        update
      </button>
      <h1>the count is {count}</h1>
      <div>
        <button
          onClick={() => {
            // dispatch(fetchUserById());
          }}
        >
          fetch list
        </button>
      </div>
      {/* {list?.map((item) => (
        <li>{item.name}</li>
      ))} */}
      <button>fetch posts</button>
      {/* {posts.data && posts.data.map((post) => <li>{post.name}</li>)} */}
      {/* <div>{!singlePost.isLoading && singlePost.data.name}</div> */}
      <button
        onClick={() => {
        //   addNewPost({ name: "pikachu", description: "descr", id: nanoid() });
        }}
      >
        add new post
      </button>
      <button
        onClick={() => {
        //   posts.refetch();
        }}
      >
        refresh
      </button>
      <BootSample/>
    </>
  );
}
