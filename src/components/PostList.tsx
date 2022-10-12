import Children from "../models/Children";
import RedditPost from "./RedditPost";

interface Props {
  redditPosts: Children[];
}

const PostList = ({ redditPosts }: Props) => {
  return (
    <li className="PostList">
      {redditPosts.map((post) => (
        <RedditPost post={post.data} />
      ))}
    </li>
  );
};

export default PostList;
