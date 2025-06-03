const imagens = document.getElementsByClassName("imagemGaleria");
const radioGaleria = document.getElementsByClassName("radioGaleria");

Array.from(radioGaleria).forEach((radio) => {
    radio.addEventListener("change", (e) => {
        if (e.currentTarget.checked) {
            
            Array.from(imagens).forEach((image) => {
                
                if(radio.classList.contains("radioAll")) {
                    image.style.display = "block";
                } else if (radio.classList.contains("radioAprovado")) {
                    image.style.display = image.classList.contains("aprovado") ? "block" : "none";
                }
                // Mostra só desaprovados
                else if (radio.classList.contains("radioDesaprovado")) {
                    image.style.display = image.classList.contains("desaprovado") ? "block" : "none";
                } else if (radio.classList.contains("radioNaoVisto")) {
                    image.style.display = image.classList.contains("naoVisto") ? "block" : "none";
                }
                
               
            });
            
        }
        
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".radioAll").checked = true;

})


