var panels = document.querySelectorAll('.panel')

panels.forEach(function(kiki){
    kiki.addEventListener('click', function (){
        removeClass()
        kiki.classList.add('active')
    })
})

function removeClass(){
    panels.forEach( function(remove){
            remove.classList.remove('active')
        })
}


