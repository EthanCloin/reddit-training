interface Content {
  author: string;
  title: string;
  id: string;
  url: string;
}

interface Post {
  data: Content;
}

interface Page {
  after: string;
  children: Post[];
  before: string | null;
}

export default interface RedditPage {
  data: Page[];
}
