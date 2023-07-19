let open = false;
let selected = false;

function displayRadioValue() {
	document.getElementById("result").innerHTML = "";
	var ele = document.getElementsByTagName("input");
	for (i = 0; i < ele.length; i++) {
		if ((ele[i].type = "radio")) {
			if (ele[i].checked)
				document.getElementById("result").innerHTML +=
					ele[i].name + " Value: " + ele[i].value + "<br>";
		}
	}
}

document.getElementById("picker").addEventListener("click", rotateSwatches);
document
	.getElementById("container")
	.addEventListener("click", updateColorSelected);

const colors = [
	"r",
	"ro",
	"o",
	"yo",
	"y",
	"yg",
	"g",
	"bg",
	"b",
	"bi",
	"i",
	"vi",
	"v"
];
const miniSwatches = document.getElementsByClassName("mini-swatch");
const swatches = document.getElementsByClassName("swatch");
const inputs = document.querySelectorAll("input[type=radio]");

(function () {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("click", updateColorSelected);
	}
});

function updateColorSelected() {
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			document.querySelector("#picker").innerHTML = inputs[i].value;
		}
	}
}

function rotateSwatches() {
	if (!open) {
		for (let i = 0; i < miniSwatches.length; i++) {
			miniSwatches[i].classList.add("mini-swatch--open");
		}

		for (let i = 0; i < colors.length; i++) {
			let rotateString = "rotate(" + i * 27.5 + "deg)";
			let duration = 0.2 * i;
			document.getElementById(colors[i]).style.transform = rotateString;
		}
	} else {
		for (let i = 0; i < colors.length; i++) {
			let rotateString = "rotate(0deg)";
			let duration = 0.2 * i;
			document.getElementById(colors[i]).style.transform = rotateString;
		}
		for (let i = 0; i < miniSwatches.length; i++) {
			miniSwatches[i].classList.remove("mini-swatch--open");
		}
	}

	open = !open;
}
