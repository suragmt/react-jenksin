import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer, { apiSlice } from "../features/user/userSlice";
import { createStore, compose } from "redux";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//      user: userReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: true
// });

const initialState = {
  count: 0
}
function rootReducer(state = initialState, action){

  switch(action.type){
    case 'add':
      return {count: state.count +action.payload}
      default:
        return state
  }
}

const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer, devtool)
