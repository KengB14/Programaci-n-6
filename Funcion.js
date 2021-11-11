window.sr = ScrollReveal(); 
sr.reveal(".hola", {// el nombre de la clase de la etiqueta esta asi porque es un class no un id (aqui no sirve porque no hay ningun hola en el index)--// 
duration: 3000,
origin: "right",
distance: "100px"
});

window.sr = ScrollReveal(); 
sr.reveal("#img_1", { //ejemplo, investigar mas sobre scrollreveal//
duration: 3000,
origin: "right",
distance: "100px"
});


function colorear() {
    document.getElementById("img_1").src="imagen_2.jpg"; 
}

function Nocolores() {
    document.getElementById("img_1").src="imagen_1.gif"; 
}

function CambiaGris() {
    document.getElementById("Color").style.backgroundColor="Gray";
    document.getElementById("Tono").style.backgroundColor="Pink";
}

function Tema() {
    document.getElementById("Tema").style.backgroundColor="Purple";
}

function Tema2() {
    document.getElementById("Marquee").style.backgroundColor="Pink";
}

function agregar(){
    var Lista = document.getElementById("Lista");
    var dato = document.getElementById("Dato").value;
    var li = document.createElement("li");
    li.textContent=dato;
    Lista.appendChild(li); 
}

function eliminar() {
    var Lista = document.getElementById("Lista");
    Lista.removeChild(Lista.lastElementChild);
}