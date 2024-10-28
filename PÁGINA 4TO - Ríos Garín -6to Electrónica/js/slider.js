(function (){
   const sliders = [...document.querySelectorAll('.testimony_body')];
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        valor = Number (currentTestimony);
        valor+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(valor === sliders.length+1 || valor === 0){
            valor = valor === 0 ? sliders.length : 1;
        }

        sliders[valor-1].classList.add('testimony_body--show');
    }
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let valor;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

}());
