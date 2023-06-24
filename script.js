const checked = 'checked';

const space = document.getElementById('space');
space.innerHTML = ' ';

document.addEventListener('keydown', (e) => {      

    console.log(e.key)

    


    for (let i = 0; i < 74; i++) {
        const hidden = document.getElementsByTagName('span')[i];
        const tecla = document.getElementsByTagName('h2')[i];
        
        if (e.key === hidden.innerHTML) {
            tecla.classList.toggle(checked);
        }
    }

});
