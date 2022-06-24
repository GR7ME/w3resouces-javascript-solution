let text = document.getElementById("cop")

function copy_to_clip(){
	let value = text.value
	navigator.clipboard.writeText(value).then(() => {
		console.log("copied to clipboard")
	},()=>{
	console.log("Failed copied to clipboard")
	});
	text.innerText = ""
}


