function toggleBurger17() {
	document.querySelector(".burger-17").classList.toggle("burger-17--active");
}

const copyBurger17 = document.querySelector(".copy-burger-17");

copyBurger17.addEventListener("click", () => {
	copyBurger17.textContent = "Copied";
	setTimeout(() => {
		copyBurger17.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
      ${document.querySelector(".burger-17").outerHTML}
    <script>
    ${toggleBurger17}
    </script>
    <style>
.burger-17 {
	position: relative;
	width: 50px;
	padding: 25px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.burger-17::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translateY(-10px) rotate(0);
	transition: transform 0.3s;
}

.burger-17--active::before {
	transform: translateY(0) rotate(135deg);
}

.burger-17::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translateY(10px) rotate(0);
	transition: transform 0.3s;
}

.burger-17--active::after {
	transform: translateY(0) rotate(45deg);
}
    </style>
    `);
});
