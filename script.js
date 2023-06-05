const imageOnes = document.querySelectorAll(".image-one")


function leftArrow(){

	imageOnes.forEach((imageOne)=>{
		imageOne.classList.add("rotate")
		
	})
}
function rightArrow(){

	imageOnes.forEach((imageOne)=>{
		imageOne.classList.remove("rotate")
		
	})
}