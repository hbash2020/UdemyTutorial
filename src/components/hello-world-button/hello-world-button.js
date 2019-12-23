import './hello-world-button.scss';

class HelloWorldButton {
	render() {
		const button = document.createElement('button');
		button.innerHTML = 'Hello World 1';
		button.classList.add('hello-world-button');
		const body = document.querySelector('body');
		button.onclick = function() {
			const p = document.createElement('p');
			p.innerHTML = 'Hello World 2';
			p.classList.add('hello-world-text');
			body.appendChild(p);
		};
		body.appendChild(button);
	}
}

export default HelloWorldButton;
