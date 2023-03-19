const fooBtn = document.querySelector('#foo');
const barBtn = document.querySelector('#bar');
const foobarBtn = document.querySelector('#foobar');
const main = document.querySelector('main');

fooBtn.addEventListener('click', () => {
	const h3 = document.createElement('h3');
	h3.textContent = 'Foo';
	main.appendChild(h3);
});

barBtn.addEventListener('click', () => {
	const h3 = document.createElement('h3');
	h3.textContent = 'Bar';
	main.appendChild(h3);
});

foobarBtn.addEventListener('click', () => {
	const h2 = document.createElement('h2');
	h2.textContent = 'FooBar';
	main.appendChild(h2);
});
