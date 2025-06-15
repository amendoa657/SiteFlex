const imagens = document.getElementsByClassName("imagemGaleria");
const radioGaleria = document.getElementsByClassName("radioGaleria");

Array.from(radioGaleria).forEach((radio) => {
    
    radio.addEventListener("change", (e) => {
        if (e.currentTarget.checked) {
            
            Array.from(imagens).forEach((image) => {
                
                if(radio.classList.contains("radioAll")) {
                    //image.style.display = "block";
                    image.style.animation = "imagemAnimOut 0.1s forwards";
        
                } else if (radio.classList.contains("radioAprovado")) {
                    //image.style.display = image.classList.contains("aprovado") ? "block" : "none";
                    image.style.animation =  image.classList.contains("aprovado") ? "imagemAnimOut 0.1s forwards" : "imagemAnimIn 0.2s forwards";
                }
                
                
                // Mostra só desaprovados
                else if (radio.classList.contains("radioDesaprovado")) {
                    //image.style.display = image.classList.contains("desaprovado") ? "block" : "none";
                    image.style.animation =  image.classList.contains("desaprovado") ? "imagemAnimOut 0.1s forwards" : "imagemAnimIn 0.2s forwards";
                } else if (radio.classList.contains("radioNaoVisto")) {
                    //image.style.display = image.classList.contains("naoVisto") ? "block" : "none";
                    image.style.animation =  image.classList.contains("naoVisto") ? "imagemAnimOut 0.1s forwards" : "imagemAnimIn 0.2s forwards";
                }
                
               
            });
            
        }
        
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".radioAll").checked = true;

})



/*
window.addEventListener('load', function(event) {
    var targetClassName = 'galeria';
    var defaultDuration = '0.3s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
  });

*/
  



