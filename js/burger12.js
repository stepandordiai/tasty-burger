function toggleBurger12() {
	document.querySelector(".burger-12").classList.toggle("burger-12--active");
	document
		.querySelector(".burger-12__center-line")
		.classList.toggle("burger-12__center-line--active");
}

const copyBurger12 = document.querySelector(".copy-burger-12");

copyBurger12.addEventListener("click", () => {
	copyBurger12.textContent = "Copied";
	setTimeout(() => {
		copyBurger12.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
      ${document.querySelector(".burger-12").outerHTML}
    <script>
    ${toggleBurger12}
    </script>
    <style>
.burger-12 {
	position: relative;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
}

.burger-12::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	transform: translateY(-15px);
	transition: all 0.3s;
}

.burger-12__center-line {
	width: 100%;
	height: 2px;
	background: #fff;
}

.burger-12::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	transform: translateY(15px);
	background: #fff;

	transition: all 0.3s;
}

.burger-12--active::before {
	transform: translateY(0);
	rotate: -45deg;
	transform-origin: top left;
}

.burger-12--active::after {
	transform: translateY(0);
	rotate: 45deg;
	transform-origin: bottom left;
}
    </style>
    `);
});
