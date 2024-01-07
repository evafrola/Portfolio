const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.getElementById('dropdown-button');

dropdownButton.addEventListener('click', () => {
    if(dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden')
    } else {
        dropdownMenu.classList.add('hidden')
    } 
})