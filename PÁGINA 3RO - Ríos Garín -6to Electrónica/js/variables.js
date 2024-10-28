(function (){
    const tituloVariables = [...document.querySelectorAll('.variables_titulo')];
    console.log(tituloVariables)

    tituloVariables.forEach (question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('variables_preguntas--add');
            question.children[0].classList.toggle('variables_flecha--rotate');
            answer.classList.toggle('variables_show--show');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `$(height)px`;
        })
    })
}())
