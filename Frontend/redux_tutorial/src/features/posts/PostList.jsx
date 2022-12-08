// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectAllPosts,
//   getPostsStatus,
//   getPostsError,
//   fetchPosts,
// } from "./postSlice";

// import { useEffect } from "react";
// import PostsExcerpt from "./PostsExcerpt";

// const PostList = () => {
//   const dispatch = useDispatch();

//   const posts = useSelector(selectAllPosts);
//   const postsStatus = useSelector(getPostsStatus);
//   const error = useSelector(getPostsError);

//   useEffect(() => {
//     if (postsStatus === "idle") {
//       dispatch(fetchPosts());
//     }
//   }, [postsStatus, dispatch]);

//   // const orderedPosts = posts
//   //   .slice()
//   //   .sort((a, b) => b.date.localeCompare(a.date));

//   // const renderedPosts = orderedPosts.map(post => <PostsExcerpt />);

//   let content;
//   if (postsStatus === "loading") {
//     content = <p>'Loading...'</p>;
//   } else if (postsStatus === "succeeded") {
//     const orderedPosts = posts
//       .slice()
//       .sort((a, b) => b.date.localeCompare(a.date));
//     content = orderedPosts.map(post => (
//       <PostsExcerpt key={post.id} post={post} />
//     ));
//   } else if (postsStatus === "failed") {
//     content = <p>{error}</p>;
//   }
//   return (
//     <section>
//       <h2>Posts</h2>
//       {content}
//     </section>
//   );
// };

// export default PostList;

import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
