let addr = "https://people.eecs.ku.edu/~o856s535/"
let index = 0;

let imgZarathustra = "images/zarathustra.jpg"
let imgLightning = "images/lightningLord.jpg"
let imgLastMan = "images/lastMan.jpg"
let imgUbermensch = "images/ubermensch.jpg"
let imgReplicant = "images/replicant.jpg"

let images = [imgZarathustra, imgLightning, imgLastMan, imgUbermensch, imgReplicant]
let imgCurrent = document.getElementById("img")

let width = '300'
let height = imgCurrent.height
imgCurrent.width = width
imgCurrent.height = height

let prevBtn = document.getElementById("picPrevBtn")
let nextBtn = document.getElementById("picNextBtn")
prevBtn.addEventListener("click", movePrev)
nextBtn.addEventListener("click", moveNext)

function movePrev(){
	if(imgCurrent.src == addr+images[0]){
		index = images.length-1
	} else {
		index -= 1
	}
	
	imgCurrent.src = images[index]
}

function moveNext(){
	if(imgCurrent.src == addr+images[images.length-1]){
		index = 0
	} else {
		index += 1
	}
	
	imgCurrent.src = images[index]
}
