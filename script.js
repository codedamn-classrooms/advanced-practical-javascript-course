const btn1 = document.getElementById('my-button')
const btn2 = document.getElementById('my-second-button')
const output = document.getElementById('output')
const input = document.getElementById('my-input')

btn1.addEventListener('click', swapInput)
btn2.addEventListener('click', clearListener)

function swapInput() {
	output.innerText = input.value
}

function clearListener() {
	btn1.removeEventListener('click', swapInput)
}
