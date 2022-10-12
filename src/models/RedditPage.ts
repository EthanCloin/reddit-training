// my prev version and not used

export interface Content {
  author: string;
  title: string;
  id: string;
  url: string;
}

export interface Post {
  data: Content;
}

export interface Page {
  after: string;
  children: Post[];
  //   before: string | null;
}

export default interface RedditPage {
  data: Page[];
  nextPage: string;
}
