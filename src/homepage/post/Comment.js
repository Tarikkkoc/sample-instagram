import React, { Fragment, useState } from "react";

const Comment = ({ comments }) => {
  // console.log("--->", postId);

  // const getUsername = (userId) => {
  //   const user = userData.find((user) => user.userId === userId);
  //   return <span>{user.username}</span>;
  // };

  //map
  // const result = comments.map((comment) => {
  //   const user = userData.find((user) => user.userId === comment.userId);

  //   return {
  //     commentId: comment.commentId,
  //     postId: comment.postId,
  //     userId: comment.userId,
  //     comment: comment.comment,
  //     likes: comment.likes,
  //     createDate: comment.createDate,
  //     username: user.username,
  //   };
  // });

  // //foreach

  // const result2 = [];
  // comments.forEach((comment) => {
  //   const user = userData.find((user) => user.userId === comment.userId);

  //   result2.push({
  //     commentId: comment.commentId,
  //     postId: comment.postId,
  //     userId: comment.userId,
  //     comment: comment.comment,
  //     likes: comment.likes,
  //     createDate: comment.createDate,
  //     username: user.username,
  //   });
  // });

  // //for
  // const result3 = [];
  // for (let i = 0; i < comments.length; i++) {
  //   const user = userData.find((user) => user.userId === comments[i].userId);

  //   result3.push({
  //     commentId: comments[i].commentId,
  //     postId: comments[i].postId,
  //     userId: comments[i].userId,
  //     comment: comments[i].comment,
  //     likes: comments[i].likes,
  //     createDate: comments[i].createDate,
  //     username: user.username,
  //   });
  // }

  // //for in
  // const result4 = [];
  // for (let i in comments) {
  //   const user = userData.find((user) => user.userId === comments[i].userId);

  //   result4.push({
  //     commentId: comments[i].commentId,
  //     postId: comments[i].postId,
  //     userId: comments[i].userId,
  //     comment: comments[i].comment,
  //     likes: comments[i].likes,
  //     createDate: comments[i].createDate,
  //     username: user.username,
  //   });
  // }

  // console.log({ result, comments, result2, result3, result4 });
  return (
    <div className="flex flex-col w-full gap-2">
      {comments.map((comment) => (
        <div className="flex  gap-2 " key={comment.commentId}>
          {/* <Username userId={comment.userId}></Username> */}
          {/* <span>{getUsername(comment.userId)}</span> */}
          <span className="font-semibold">{comment.username}</span>
          <span>{comment.comment}</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;

// const Username = ({ userId }) => {
//   const user = userData.find((user) => user.userId === userId);

//   return <span className="font-semibold">{user.username}</span>;
// };
