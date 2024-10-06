const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');
const inicio = document.getElementById('inicio');
const servicios = document.getElementById('servicios');
const productos = document.getElementById('productos');
const contactanos = document.getElementById('contactanos');

// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `img/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            inicio.textContent = 'Start';
            servicios.textContent = 'Service';
            productos.textContent = 'Product';
            contactanos.textContent = 'Contact'; 
           break;
        
        case 'latino':
            inicio.textContent = 'Inicio';
            servicios.textContent = 'Servicios';
            productos.textContent = 'Productos';
            contactanos.textContent = 'Contactanos'; 

           break;
    
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    
    switch (navigator.language) {
        case 'es-ES':
            establecerIdioma('usa')
            break;
        
        default:
            break;
    }
});



(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();