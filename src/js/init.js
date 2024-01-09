const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.getElementById('dropdown-button');

document.addEventListener('change', ()=> {
    if(dropdownButton.classList.contains('hidden') && !dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden')
    }
})

dropdownButton.addEventListener('click', () => {
    if(dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden')
    } else {
        dropdownMenu.classList.add('hidden')
    } 
})