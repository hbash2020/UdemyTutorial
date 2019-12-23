import myimage from './document-preview.png';

function addImage() {
	const img = document.createElement('img');
	img.alt = 'Some Image';
	img.width = 300;
	img.src = myimage;

	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImage;
