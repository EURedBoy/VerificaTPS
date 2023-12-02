const imageElement = document.getElementById('mainImage');
const textElement = document.getElementById('mainText');


setTimeout(() => {
    imageElement.src = '../../src/nuova_immagine.jpg';
    textElement.innerText = 'Il piacere dello studio e la serietà (faccina che ride) ';
}, 5000);
