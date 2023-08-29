const container = document.querySelector(".container");

async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (response.ok) {
      const photos = await response.json();
      for (let i = 0; i < 100; i++) {
        generatePhoto(photos[i]);
      }
    } else {
      console.log("kazkas blogai");
    }
  } catch (error) {
    console.log(error);
  }
}

function generatePhoto(photo) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = photo.url;
  img.style.width = "200px";

  const title = document.createElement("h6");
  title.textContent = photo.title;
  div.append(title, img);
  container.append(div);
}

getPhotos();
