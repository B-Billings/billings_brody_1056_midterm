(()=>{


	const TheList = document.querySelector("#blist"),
			type = document.querySelector(".about h3"),
			beerinfo = document.querySelector("#biotext");
			const button = document.querySelector("#button");
			const burgerCon = document.querySelector("#burgerCon");


				function hamburgerMenu() {
					//console.log("burger time!")
					button.classList.toggle("expanded");
					burgerCon.classList.toggle("slideToggle");
				}
	const introContent = [
    [`IPA`, `Bold tasting IPA 7% Alc`],
		[`EPA`, `Classic EPA 5% Alc`],
		[`Lager`, `Goldbonds signiature 5% Alc`],
		[`Goldbonds signiature 5% Alc`],
	];



	function beerbio(name, text) {
		type.textContent = name;
		beerinfo.textContent = text;
	}

	function changeText0(event) {
		beerbio(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1]);
						console.log("Text Changed");
	}


	TheList.addEventListener("click", changeText0);

	button.addEventListener("click", hamburgerMenu);
})();


(function(){

	const button = document.querySelector("#button");
	const menu = document.querySelector("#menucontent");

	function compactmenu() {
		//console.log("burger time!")
		button.classList.toggle("expanded");
		menu.classList.toggle("slideToggle");
	}


	button.addEventListener("click", compactmenu);
})();
