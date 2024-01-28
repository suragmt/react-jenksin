import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAdaptor = createEntityAdapter({
  sortComparer: (a, b) => a.id - b.id,
});
const initialState = userAdaptor.getInitialState();
// const initialState = {
//   name: "",
//   address: {
//     city: "",
//     state: "",
//   },
//   list: [],
// };

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ['posts'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    fetchPosts: builder.query({ query: () => "/posts", providesTags: ['posts'] }),
    getPost: builder.query({ query: (id) => `/posts/${id}` }),
    addNewPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ['posts']
    }),
  }),
});

export const { useFetchPostsQuery, useGetPostQuery, useAddNewPostMutation } = apiSlice;
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: {
      reducer: (state, action) => {
        console.log(action.payload);
        state.name = action.payload.name;
        state.address = action.payload.address;
      },
      prepare: (name, city, state) => {
        return {
          payload: {
            name,
            address: { city, state },
          },
        };
      },
    },
    userFetchSuccess: (state, payload) => {
      console.log(payload, "list");
      state.list = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        console.log("its pending");
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

// function userFetchSuccess(payload) {
//   return { type: "user/success", payload };
// }

function userFetchFailed() {
  return { type: "user/failed" };
}
export function fetchUserList() {
  return (dispatch) => {
    setTimeout(() => {
      console.log("reached here");
      dispatch(
        userFetchSuccess([
          { name: "surag", city: "vadakara" },
          { name: "sukee", city: "vadakara" },
          { name: "sudha", city: "vadakara" },
        ])
      );
    }, 3000);
  };
}

export const fetchUserById = createAsyncThunk("users/fetch", async () => {
  return new Promise((done, reject) => {
    setTimeout(() => {
      done([
        { name: "surag", city: "vadakara" },
        { name: "sukee", city: "vadakara" },
        { name: "sudha", city: "vadakara" },
      ]);
    }, 3000);
  });
});
export default userSlice.reducer;
export const { updateName, userFetchSuccess } = userSlice.actions;
export const { selectAll, selectById } = userAdaptor.getSelectors(
  (state) => state.api
);
export const userSelector = (state) => state.user;
