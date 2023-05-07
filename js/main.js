//MILESTONE 1
//costruisco il markup statico
//mi creo indice poszione
let imgPosition= 0;

//definisco le immagine dentro un array 
const image = ["01.webp","02.webp", "03.webp","04.webp","05.webp"]
const container = document.getElementById("container");
const buttonNext = document.getElementById("next")
const buttonPrev = document.getElementById("prev")

//apro il ciclo for per generare le immagine
for (let i = 0; i <= image.length; i++) {
    
    const imgContainer= document.createElement("div");

    imgContainer.innerHTML = `<img src="img/${image[i]}" alt="">`;
    
    container.append(imgContainer);
}

//selezioni le immagine
const carousel = document.querySelectorAll("img");
console.log(carousel);

//aggiungo la classe active alle immagini 
carousel[imgPosition].classList.add("active");

//aggiungo la funzione click al bottone

buttonNext.addEventListener("click",
    function() {
        carousel[imgPosition].classList.remove("active");

        if (imgPosition == image.length -1 ){
            imgPosition = 0;
        }else{
            imgPosition++;
        }
            
        
        carousel[imgPosition].classList.add("active");
    }
);
buttonPrev.addEventListener("click",
    function() {
        carousel[imgPosition].classList.remove("active");

        if (imgPosition == 0){
            imgPosition = image.length -1;
        } else{
            imgPosition--;
        }
        carousel[imgPosition].classList.add("active");
    }
);




