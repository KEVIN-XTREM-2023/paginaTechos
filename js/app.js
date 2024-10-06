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

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');


const about = document.getElementById('about');
const who = document.getElementById('who');
const why = document.getElementById('why');
const employment = document.getElementById('employment');
const service = document.getElementById('service');
const servSingle = document.getElementById('servSingle');
const servRubber = document.getElementById('servRubber');
const otherSer = document.getElementById('otherSer');
const siding = document.getElementById('siding');
const gutters = document.getElementById('gutters');
const garden = document.getElementById('garden');
const contact = document.getElementById('contact');
const home = document.getElementById('home');


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
            home.textContent = 'Home';
            about.textContent ='About';
            who.textContent ='Who we are';
            why.textContent ='why choose us';
            employment.textContent ='Opportunities';
            service.textContent ='Service';
            servSingle.textContent ='Replacement of Shingles Roof';
            servRubber.textContent ='Replacement of Rubber Roof';
            otherSer.textContent ='Other services';
            siding.textContent ='Siding';
            gutters.textContent ='Gutters';
            garden.textContent ='Garden Maintenance';
            contact.textContent ='Contact';

           break;
         case 'latino':
            home.textContent = 'Incio';
            about.textContent ='Nosotros';
            who.textContent ='Somos ';
            why.textContent ='Eliguenos';
            employment.textContent ='Oportunidades';
            service.textContent ='Servicios';
            servSingle.textContent ='Reemplazo de techo de tejas';
            servRubber.textContent ='Reemplazo de techo de caucho';
            otherSer.textContent ='Otros servicios';
            siding.textContent ='Revestimiento';
            gutters.textContent ='Canaletas';
            garden.textContent ='Mantenimiento Jardines';
            contact.textContent ='Contactanos';

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

