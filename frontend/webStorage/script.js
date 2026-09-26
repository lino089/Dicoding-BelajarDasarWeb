// const localStorageKey = 'PRESS_FREQUENCY';

// if(typeof Storage !== 'undefined') {
//     if(localStorage.getItem(localStorageKey) === null){
//         localStorage.setItem(localStorageKey, 0);
//     }
//     const incrementButton = document.querySelector('#incrementButton');
//     const clearButton = document.querySelector('#clear');
//     const countDisplay = document.querySelector('#count');

//     countDisplay.innerText = localStorage.getItem(localStorageKey);
    
//     incrementButton.addEventListener('click', () => {
//         let count = localStorage.getItem(localStorageKey);
//         count++;
//         localStorage.setItem(localStorageKey, count);
//         countDisplay.innerText = localStorage.getItem(localStorageKey);
//     });

//     clearButton.addEventListener('click', () => {
//         localStorage.removeItem(localStorageKey);
//         countDisplay.innerText = 0;
//     });
// } else {
//     alert('Browser yang anda gunakan tidak mendukung Web Storage');
// }


const sessionStorageKey = 'PRESS_FREQUENCY';

if(typeof Storage !== 'undefined') {
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey, 0);
    }
    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    
    incrementButton.addEventListener('click', () => {
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    clearButton.addEventListener('click', () => {
        sessionStorage.removeItem(sessionStorageKey);
        countDisplay.innerText = 0;
    });
} else {
    alert('Browser yang anda gunakan tidak mendukung Web Storage');
}