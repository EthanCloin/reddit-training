// from class
import axios from "axios";
import RedditResponse from "../models/RedditResponse";

export const getSubredditPosts = (
  subreddit: string = "aww"
): Promise<RedditResponse> => {
  return axios
    .get(`https://www.reddit.com/r/${encodeURIComponent(subreddit)}/.json`)
    .then((response) => {
      return response.data;
    });
};
