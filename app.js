window.addEventListener("load", function () {
// Function to fetch images and links from the 'assets' folder
  function fetchImagesAndLinks() {
    return new Promise((resolve, reject) => {
      fetch("assets/images.json")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }


// Function to render images in the grid
  function renderImageGrid(images) {
    const imageGrid = document.getElementById("imageGrid");
    images.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.className = "image-item";
      imageGrid.appendChild(imgElement);
    });
  }



// Function to render data, images and links in the grid
  function renderImageGrid(data) {
    const imgGrid = document.getElementById("imageGrid");
    data.forEach((item) => {
      const imgContainer = document.createElement("a");
      imgContainer.href = item.linkUrl;
      imgContainer.target = "_blank";
      imgContainer.className = "image-item";

      const imgElement = document.createElement("img");
      imgElement.src = item.imgUrl;
      imgElement.alt = item.trackName;
      
      const imgText = document.createElement("p");

      imgText.textContent = item.trackName && !item.trackName.startsWith("Album") 
        ? `Track ${item.trackNumber} : ${item.trackName}`
          : item.trackName && item.trackName.includes("Album")
            ? `${item.trackName.replace("Track ", "")}`
              : "";



      imgContainer.appendChild(imgElement);
      imgContainer.appendChild(imgText);

      imgGrid.appendChild(imgContainer);

    });
  }



// Load images and links and render the grid
  fetchImagesAndLinks()
    .then((data) => renderImageGrid(data))
    .catch((error) => console.error("Error fetching images and links:", error));
});
