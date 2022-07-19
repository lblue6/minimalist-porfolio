//  Switch
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//  Modal
function btnChanger() {
    let bg = document.getElementById("container").style.background = "#000000";

}


const imagens = document.querySelectorAll('.gallery .container-image');
const imagenModal = document.getElementById('image-modal');

imagens.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		const ruta = imagen.querySelector('img').src;
		imagenModal.src = ruta;
	});
});




