// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach(link => {
//         if (link.href === window.location.href) {
//             link.classList.add('active');
//         }
//     })
// });

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/icon.ico';
img.alt = 'The Stranger PH';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');    
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'The Stranger PH - ' + TIME ;

document.addEventListener('DOMContentLoaded', function() {
    const buttonToggle = document.getElementById('toggle-button');
    buttonToggle.className = 'button_grey';
    buttonToggle.addEventListener('click' , function() {
        cuerpo.classList.toggle('dark-mode');
        updateButtonText();
    })

    // function updateButtonText() {
    //     if(cuerpo.classList.contains('dark-mode')) {
    //         buttonToggle.textContent = 'Cambiar a modo claro';
    //     } else {
    //         buttonToggle.textContent = 'Cambiar a modo oscuro';
    //     }
    // }

    // updateButtonText();
})