const img = document.getElementById("tvImage");
const sliderButtons = document.getElementsByClassName("sliderButton");

sliderButtons[0].addEventListener("click", () => {
	img.src="images/Liberty.png";
	sliderButtons[0].style.backgroundColor = "white";
	sliderButtons[0].style.border = "2px solid #00b6a4"
	sliderButtons[1].style.backgroundColor = "#00b6a4";
	sliderButtons[2].style.backgroundColor = "#00b6a4";
	sliderButtons[3].style.backgroundColor = "#00b6a4";
	sliderButtons[4].style.backgroundColor = "#00b6a4";
})
sliderButtons[1].addEventListener("click", () => {
	img.src="images/Binocular.jpg";
	sliderButtons[0].style.backgroundColor = "#00b6a4";
	sliderButtons[1].style.backgroundColor = "white";
	sliderButtons[1].style.border = "2px solid #00b6a4"
	sliderButtons[2].style.backgroundColor = "#00b6a4";
	sliderButtons[3].style.backgroundColor = "#00b6a4";
	sliderButtons[4].style.backgroundColor = "#00b6a4";
})
sliderButtons[2].addEventListener("click", () => {
	img.src="images/Landscape.jpg";
	sliderButtons[0].style.backgroundColor = "#00b6a4";
	sliderButtons[1].style.backgroundColor = "#00b6a4";
	sliderButtons[2].style.backgroundColor = "white";
	sliderButtons[2].style.border = "2px solid #00b6a4"
	sliderButtons[3].style.backgroundColor = "#00b6a4";
	sliderButtons[4].style.backgroundColor = "#00b6a4";
})
sliderButtons[3].addEventListener("click", () => {
	img.src="images/Nature.jpg";
	sliderButtons[0].style.backgroundColor = "#00b6a4";
	sliderButtons[1].style.backgroundColor = "#00b6a4";
	sliderButtons[2].style.backgroundColor = "#00b6a4";
	sliderButtons[3].style.backgroundColor = "white";
	sliderButtons[3].style.border = "2px solid #00b6a4"
	sliderButtons[4].style.backgroundColor = "#00b6a4";
})
sliderButtons[4].addEventListener("click", () => {
	img.src="images/Paris.jpg";
	sliderButtons[0].style.backgroundColor = "#00b6a4";
	sliderButtons[1].style.backgroundColor = "#00b6a4";
	sliderButtons[2].style.backgroundColor = "#00b6a4";
	sliderButtons[3].style.backgroundColor = "#00b6a4";
	sliderButtons[4].style.backgroundColor = "white";
	sliderButtons[4].style.border = "2px solid #00b6a4"
})