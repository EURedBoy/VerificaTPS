var immagini = [
    "centrobenessere.jpg",
    "centrobenessere2.jpg",
    "centrobenessere3.jpg",
    "centrobenessere4.jpg",
    "centrobenessere5.jpg",
  ];

  var indice = 0;

  function cambiaImmagine() {
    var immagine = document.getElementById("immagine");
    indice = (indice + 1) % immagini.length;
    immagine.src = immagini[indice];
    immagine.alt = "Immagine " + (indice + 1);
  }