fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      console.log("kazkas negerai");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err, "error Happend");
  });

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Kazkas negerai: " + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();
