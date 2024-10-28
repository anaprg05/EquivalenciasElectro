(function (){
    const sliders = [...document.querySelectorAll('.testimony_body2')];
     const changePosition = (add)=>{
         const currentTestimony = document.querySelector('.testimony_body--show2').dataset.id;
         valor = Number (currentTestimony);
         valor+= add;
 
         sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show2');
         if(valor === sliders.length+1 || valor === 0){
             valor = valor === 0 ? sliders.length : 1;
         }
 
         sliders[valor-1].classList.add('testimony_body--show2');
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
 