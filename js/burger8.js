function toggleBurger8() {
	document.querySelector(".burger-8").classList.toggle("burger-8--active");
	document
		.querySelector(".burger-8__center-line")
		.classList.toggle("burger-8__center-line--active");
}

const copyBurger8 = document.querySelector(".copy-burger-8");

copyBurger8.addEventListener("click", () => {
	copyBurger8.textContent = "Copied";
	setTimeout(() => {
		copyBurger8.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
      ${document.querySelector(".burger-8").outerHTML}
    <script>
    ${toggleBurger8}
    </script>
    <style>
.burger-8 {
	position: relative;
	width: 50px;
	height: 0px;
	padding: 15px 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.burger-8::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	transform: translateY(-15px);
	transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-8::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	transform: translateY(15px);
	transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-8__center-line {
	width: 50px;
	height: 2px;
	background: #fff;

	opacity: 1;
	transition: all 0s 0.3s;
}

.burger-8__center-line--active {
	opacity: 0;
}

.burger-8--active::before {
	transform: translateY(0);
	rotate: 45deg;
	transition: transform 0.3s, rotate 0.3s 0.3s;
}

.burger-8--active::after {
	transform: translateY(0);
	rotate: -45deg;
	transition: transform 0.3s, rotate 0.3s 0.3s;
}
    </style>
    `);
});
