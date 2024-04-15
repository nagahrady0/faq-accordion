let question = document.querySelectorAll("h3");
let questionArray = Array.from(question);

let btn = document.querySelectorAll(".question .btn");

let btnArray = Array.from(btn);


btnArray.map((btnButton)=>{

	btnButton.onclick =()=>{
	
	 let parentone = btnButton.parentNode;
	let  lastparent = parentone.parentNode;
	 lastparent.children[1].classList.toggle("show");
	 btnButton.classList.toggle("minse");
		
	}
});

questionArray.map((questionButton)=>{
		
		questionButton.onclick =()=>{
		
		let parentone = questionButton.parentNode;
		let  lastparent = parentone.parentNode;
		lastparent.children[1].classList.toggle("show");
		lastparent.children[0].children[1].classList.toggle("minse");

		
		}
});
