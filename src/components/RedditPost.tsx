import Post from "../models/Post";
import "./RedditPost.css";

interface Props {
  post: Post;
}
const RedditPost = ({ post }: Props) => {
  return (
    <div className="RedditPost">
      <h1>{post.title}</h1>
      <p>By: {post.thumbnail} at</p>
      <a href={post.url}>{post.url}</a>
    </div>
  );
};

export default RedditPost;
