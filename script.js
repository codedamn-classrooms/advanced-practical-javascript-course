const button = document.getElementById('my-button')

button.addEventListener('click', handler, {
	once: true
})

function handler() {
	document.getElementById('output').innerText = button.innerText
}
