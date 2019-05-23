const image = document.querySelectorAll("img");

image.forEach(addImg);

function addImg(img) {
	img.addEventListener("click", imgClicked);
}
let count = 0

function addChange(img) {
	img.classList.add("changeit");
}

function imgClicked() {
	count++
	console.log(this)
	this.classList.add("fade");
	this.removeEventListener("click", imgClicked);
	if (count == 3) {
		image.forEach(addChange);
	}

}
