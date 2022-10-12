import "./Home.css";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { getSubredditPosts } from "../services/RedditService";
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
