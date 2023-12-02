const imageElement = document.getElementById('mainImage');
const textElement = document.getElementById('mainText');


setTimeout(() => {
    imageElement.src = 'nuova_immagine.jpg';
    textElement.innerText = 'Il piacere dello studio hahah';
}, 5000);
