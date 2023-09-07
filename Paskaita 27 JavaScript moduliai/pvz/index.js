import { getPosts } from "./fetchers/posts.js";
import { generatePosts as generateP } from "./generators/posts.js";
import { addToHtml, doStuff } from "./utilities/index.js";
async function generatePosts() {
  const posts = await getPosts();
  console.log(posts);
  const postHtml = generateP(posts);

  addToHtml(document.body, postHtml);
}
generatePosts();
