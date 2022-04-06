(()=>{


	const first = document.querySelector("#first"),
  second = document.querySelector("#second"),
  third = document.querySelector("#third"),
  fourth = document.querySelector("#fourth"),
			text = document.querySelector(".advertisments p"),
			adinfo = document.querySelector("#adinfo"),
      adinfo1 = document.querySelector("#adinfo1"),
      adinfo2 = document.querySelector("#adinfo2"),
      adinfo3 = document.querySelector("#adinfo3");


	const adcontent = [
    [`This was the 2021 V-Day 2 pack for 2$ PROMO whether is for just you we dont care`],
		[`The 2019 Winter Promo found in Northern Europe`],
		[`We knew you wanted a deal for summer so we provided`],
		[`Because we offer a flavour from another world N/A billboard ad`],
	];


	function adbio(text) {
		adinfo.textContent = text;
	}

	function changeText(event) {
		adbio(adcontent[event.target.dataset.offset][0]);
						console.log("Text Changed");
	}



  function adbio1(text) {
    adinfo1.textContent = text;
  }

  function changeText1(event) {
    adbio1(adcontent[event.target.dataset.offset][0]);
            console.log("Text Changed");
  }



  function adbio2(text) {
    adinfo2.textContent = text;
  }

  function changeText2(event) {
    adbio2(adcontent[event.target.dataset.offset][0]);
            console.log("Text Changed");
  }



  function adbio3(text) {
    adinfo3.textContent = text;
  }

  function changeText3(event) {
    adbio3(adcontent[event.target.dataset.offset][0]);
            console.log("Text Changed");
  }




	first.addEventListener("click", changeText);
  second.addEventListener("click", changeText1);
  third.addEventListener("click", changeText2);
  fourth.addEventListener("click", changeText3);


})();
