import axios from "axios";
import RedditPage from "../models/RedditPage";
/* 
ISSUE:
in the class example we returned directly from the axios library
if im reading the docs correctly, i believe we need to return both the post data 
as a promise and somehow retrieve a property from that post data "after". 
this property should be stored and used to fetch the next page by adding a parameter
with that value.

Should I return an object or tuple like {nextPage: string, data: Promise<RedditPage>}
or could I convert the promise into an object first and return it as a custom
object like {nextPage: string, data: RedditPage}? *I think not returning a Promise may make the operation synchronous, but 
not 100% confident that's how that works*.

*/

// This should be called with no params on mount, then called with params when
// user clicks the next page button
export const getPostBlob = (
  after?: string,
  limit: number = 5
): Promise<RedditPage> => {
  // after property calls the next page
  // if (after) {
  //   const nextPage: Promise<RedditPage> = axios
  //     .get("https://www.reddit.com/r/aww/.json", {
  //       params: {
  //         after: after,
  //         limit: limit,
  //       },
  //     })
  //     // duplicate logic in then
  //     .then((response) => {
  //       const after = response.data.after;
  //       return {
  //         data: response.data,
  //         nextPage: after,
  //       };
  //     });
  // } else {
  // no after property calls a page from the subreddit
  const firstPage: Promise<RedditPage> = axios
    .get("https://www.reddit.com/r/aww/.json", {
      params: {
        limit: limit,
      },
    })
    // duplicate logic in then
    .then((response) => {
      const after = response.data.after;
      return response.data;
    });
  return firstPage;
};
// };
