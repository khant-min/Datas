// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: "0", name: "khant min" },
//   { id: "1", name: "kyaw kyaw" },
//   { id: "2", name: "thein tan" },
// ];

// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},
// });

// export const selectAllUsers = state => state.user;

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "khant min" },
  { id: "1", name: "kyaw kyaw" },
  { id: "2", name: "thein tan" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;

export default userSlice.reducer;
