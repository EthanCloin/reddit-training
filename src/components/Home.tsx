import "./Home.css";
import RedditPage from "./RedditPage";
import { useEffect, useState } from "react";
import RedditResponse from "../models/RedditResponse";
import PostList from "./PostList";
import { getSubredditPosts } from "../services/RedditService";
import Post from "../models/Post";
import Children from "../models/Children";

const Home = () => {
  const [posts, setPosts] = useState<Children[]>([]);

  useEffect(() => {
    const gotPosts = getSubredditPosts().then((response) => {
      setPosts(response.data.children);
    });
  }, []);

  return (
    <div className="Home">
      <PostList redditPosts={posts} />
    </div>
  );
};

export default Home;
