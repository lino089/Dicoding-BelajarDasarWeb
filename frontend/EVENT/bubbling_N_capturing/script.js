const divs = Array.from(document.getElementsByTagName('div'));

// divs.forEach((div) => {
//     div.addEventListener('click', () => {
//         alert(`ELEMEN ${div.getAttribute('id').toUpperCase()}`);
//     })
// })

// for (let el of divs) {
//   el.addEventListener('click', function() {
//     alert('ELEMEN ' + el.getAttribute('id').toUpperCase());
//   }, true);
// }

divs.forEach((div) => {
    
    div.addEventListener('click', (event) => {
        event.stopPropagation();
        alert(`ELEMEN ${div.getAttribute('id').toUpperCase()}`)
    })
})