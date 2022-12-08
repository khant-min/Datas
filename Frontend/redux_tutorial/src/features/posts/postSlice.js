// import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
// import axios from "axios";

// // const initialState = [
// //   {
// //     id: "1",
// //     title: "Learning Redux Toolkit",
// //     content: "hello world",
// //     date: sub(new Date(), { minutes: 10 }).toISOString(),
// //     reactions: {
// //       thumbsUp: 0,
// //       wow: 0,
// //       heart: 0,
// //       rocket: 0,
// //       coffee: 0,
// //     },
// //   },
// //   {
// //     id: "2",
// //     title: "Slices...",
// //     content: "hello myanmar",
// //     date: sub(new Date(), { minutes: 4 }).toISOString(),
// //     reactions: {
// //       thumbsUp: 0,
// //       wow: 0,
// //       heart: 0,
// //       rocket: 0,
// //       coffee: 0,
// //     },
// //   },
// // ];

// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// const initialState = {
//   posts: [],
//   status: "idle", // 'idle'| 'loading'| 'succeeded'| 'failed'| '
//   error: null,
// };

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get(POST_URL);
//   return response.data;
// });

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.posts.push(action.payload);
//       },
//       prepare(title, content, userId) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content,
//             date: new Date().toISOString(),
//             userId,
//             reactions: {
//               thumbsUp: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0,
//             },
//           },
//         };
//       },
//     },
//     reactionAdded(state, action) {
//       const { postId, reaction } = action.payload;
//       const existingPost = state.posts.find(post => post.id === postId);
//       if (existingPost) {
//         existingPost.reactions[reaction]++;
//       }
//     },
//     extraReducer: builder => {
//       builder
//         .addCase(fetchPosts.pending, (state, action) => {
//           state.status = "loading";
//         })
//         .addCase(fetchPosts.fulfilled, (state, action) => {
//           state.status = "succeeded";
//           // Adding date and reactions
//           let min = 1;
//           const loadedPosts = action.payload.map(post => {
//             post.date = sub(new Date(), { minutes: min++ }).toISOString();
//             post.reactions = {
//               thumbsUp: 0,
//               horray: 0,
//               heart: 0,
//               rocket: 0,
//               eyes: 0,
//             };
//             return post;
//           });
//         });
//     },
//   },
// });

// export const selectAllPosts = state => state.posts.post;
// export const getPostsStatus = state => state.posts.status;
// export const getPostsError = state => state.posts.error;

// export const { postAdded, reactionAdded } = postSlice.actions;

// export default postSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "hello world",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "hello myanmar",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = state => state.posts;

export const { postsAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
