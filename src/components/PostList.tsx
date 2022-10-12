import "./PostList.css";
import { Post } from "../models/RedditPage";
import RedditPost from "./RedditPost";
interface Props {
  redditPosts: Post[];
}

const PostList = ({ redditPosts }: Props) => {
  return (
    <li className="PostList">
      {redditPosts.map((post) => (
        <RedditPost post={post} />
      ))}
    </li>
  );
};

export default PostList;
