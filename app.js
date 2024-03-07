let accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(question =>{
    question.addEventListener('click', ()=>{

        const active = document.querySelector('.accordion-header.active')
        if(active && active !== question){
            active.classList.toggle('active')
            active.nextElementSibling.style.maxHeight = 0
        }
    
        question.classList.toggle('active')
        const answer = question.nextElementSibling
        if(question.classList.contains('active')){
            answer.style.maxHeight = answer.scrollHeight + "px"
        }
        else{
            answer.style.maxHeight = 0
        }
    })
})

window.onclick = (e) =>{
    if(!e.target.matches('.accordion-header') && !e.target.matches('.answer')){
        accordionHeader.forEach(question => {
            question.classList.remove('active')

            const answer = question.nextElementSibling
            answer.style.maxHeight = 0
        })
    }
}