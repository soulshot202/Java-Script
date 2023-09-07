export function generatePosts(posts) {
  return posts.map((el) => generatePost(el));
}

function generatePost(post) {
  const container = document.createElement("div");
  const title = document.createElement("h6");
  title.textContent = post.title;
  const body = document.createElement("p");
  body.textContent = post.body;

  container.append(title, body);
  return container;
}
