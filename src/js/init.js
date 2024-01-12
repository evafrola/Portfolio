const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.getElementById('dropdown-button');

window.addEventListener('resize', ()=> {
    if(dropdownButton.classList.contains('min-[769px]:hidden') && !dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.add('hidden');
    }
})

dropdownButton.addEventListener('click', () => {
    if(dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.classList.add('animate-fade-down', 'animate-once', 'animate-ease-in', 'animate-normal', 'animate-fill-forwards')
    } else {
        dropdownMenu.classList.add('hidden');
        dropdownButton.classList.remove('animate-fade-down', 'animate-once', 'animate-ease-in', 'animate-normal', 'animate-fill-forwards');
    } 
})