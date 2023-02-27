import commentData from "../data/Comment.json";
import userData from "../data/User.json";

export const getCommentByPostId = (postId) => {
  const comments = commentData.filter((comment) => comment.postId === postId);

  const result = comments.map((comment) => {
    const user = userData.find((user) => user.userId === comment.userId);

    return {
      commentId: comment.commentId,
      postId: comment.postId,
      userId: comment.userId,
      comment: comment.comment,
      likes: comment.likes,
      createDate: comment.createDate,
      username: user.username,
    };
  });

  return result;
};
