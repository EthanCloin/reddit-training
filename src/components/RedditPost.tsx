import { Post } from "../models/RedditPage";
import "./RedditPost.css";

interface Props {
  post: Post;
}
const RedditPost = ({ post }: Props) => {
  return (
    <div className="RedditPost">
      <h1>{post.data.title}</h1>
      <p>By: {post.data.author} at</p>
      <a href={post.data.url}>{post.data.url}</a>
    </div>
  );
};

export default RedditPost;
