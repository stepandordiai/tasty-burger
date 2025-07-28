function toggleBurger4() {
	document.querySelector(".burger-4").classList.toggle("burger-4--active");
	document
		.querySelector(".burger-4__center-line")
		.classList.toggle("burger-4__center-line--active");
}

const copyBurger4 = document.querySelector(".copy-burger-4");

copyBurger4.addEventListener("click", () => {
	copyBurger4.textContent = "Copied";
	setTimeout(() => {
		copyBurger4.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
    ${document.querySelector(".burger-4").outerHTML}
    <script>
    ${toggleBurger4}
    </script>
    <style>
.burger-4 {
	position: relative;
	width: 50px;
	height: 0;
	padding: 25px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.burger-4::before {
	content: "";
	position: absolute;
	width: 0px;
	height: 2px;
	background: #fff;

	transform: rotate(45deg);
	transition: width 0.5s;
}

.burger-4::after {
	content: "";
	position: absolute;
	width: 0px;
	height: 2px;
	background: #fff;

	transform: rotate(-45deg);
	transition: width 0.5s;
}

.burger-4__center-line {
	position: absolute;
	width: 50px;
	height: 2px;
	background: #fff;

	transition: width 0.5s 0.5s;
}

.burger-4--active::before {
	width: 50px;
	transition: width 0.5s 0.5s;
}

.burger-4--active::after {
	width: 50px;
	transition: width 0.5s 0.5s;
}

.burger-4__center-line--active {
	width: 0px;
	transition: width 0.5s;
}
    </style>
    `);
});
