// write your code here
const button1 = document.getElementById('my-button')
const button2 = document.getElementById('my-second-button')
const output = document.getElementById('output')

button1.onclick = () => {
	output.innerText = button1.innerText
}

button2.onclick = () => {
	output.innerText = button2.innerHTML
}
