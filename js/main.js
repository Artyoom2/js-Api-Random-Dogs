const button = document.querySelector(".click_cat");
const image = document.querySelector(".img");
const url = "https://random.dog/woof.json";



async function changeImgCats() {
  try {
    const response = await fetch(url);
    const data = await response.json();
		console.log(response);
		
    image.src = data.url;
		image.style.height = 400 + 'px';
		image.style.width = 600 + 'px';
  } catch (e) {
    console.log(e);
  }
}
button.addEventListener("click", handlerClick);
function handlerClick(e) {
  let isLoaded = image.complete;
  if (isLoaded) {
    changeImgCats();
  }
}
