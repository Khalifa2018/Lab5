var clickedBefore = false;

document.getElementsByTagName("img")[0].addEventListener("click", function () {
  if (!clickedBefore) {
    clickedBefore = true;

    let cloneImage = document.createElement("img");
    cloneImage.src = this.src;
    cloneImage.style.position = "absolute";
    cloneImage.style.top = "10px";
    cloneImage.style.right = "10px";

    this.style.position = "absolute";
    this.style.bottom = "10px";
    this.style.left = "10px";


    var navigationContainer = document.getElementById("navigation");
    navigationContainer.style.display="flex";
    navigationContainer.style.justifyContent="center";
    navigationContainer.style.alignItems="center";
    navigationContainer.style.height="100vh";

    var navigation = document.getElementById("nav");
    navigation.style.listStyleType="circle"

    document.body.appendChild(cloneImage);
  }
});
