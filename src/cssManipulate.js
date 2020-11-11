let btn = document.getElementById("btn")
btn.addEventListener("click", transformPage)

function transformPage(){
	let para = document.getElementById("paragraph").style
	let borderW = document.getElementById("borderWidth")

	para.borderColor = getBorderColor()
	para.backgroundColor = getBackgroundColor()
	para.borderWidth = borderW.value+"px"
}

function getBorderColor(){
	let r = document.getElementById("borderRed").value
	let g = document.getElementById("borderGreen").value
	let b = document.getElementById("borderBlue").value
	return "rgba("+r+", "+g+", "+b+", "+1+")"
}

function getBackgroundColor(){
	let r = document.getElementById("backgroundRed").value
	let g = document.getElementById("backgroundGreen").value
	let b = document.getElementById("backgroundBlue").value
	return "rgba("+r+", "+g+", "+b+", "+0.6+")"
}
