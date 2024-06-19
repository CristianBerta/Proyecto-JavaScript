parrafoFooter.innerHTML = 'Cristian Alejandro PH | Buenos Aires - Argentina ' + TIME;
footer.appendChild(parrafoFooter);

header.appendChild(img);
img.src = 'img/logo.jpg';
img.alt = 'logo';

header.appendChild(nav);

for(const link of links) {
    const a = document.createElement('a');
    a.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    nav.appendChild(a);
}