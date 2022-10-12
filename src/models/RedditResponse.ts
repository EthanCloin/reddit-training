import Children from "./Children";
import Post from "./Post";

// from class
export default interface RedditResponse {
  data: Data;
}
export interface Data {
  children: Children[];
}
