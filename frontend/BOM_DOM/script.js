const gambar = document.getElementById('gambar');

gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

const button = document.querySelectorAll('.button');

const playbutton = button[3]
const playbButtonElemen = playbutton.children[0];

playbButtonElemen.setAttribute('disabled', true);

const dicoding = document.getElementById('dicodingLink');

dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";

const buttons = document.getElementsByClassName('button');

for (const _button of buttons){
    _button.children[0].style.borderRadius = '6px';
}