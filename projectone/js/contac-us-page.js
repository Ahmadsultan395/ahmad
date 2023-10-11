const hamburger=document.getElementById('hamburger');
const navbar=document.getElementById('navbar');



hamburger.addEventListener('click',function(){
        if(!navbar.style.display){
            navbar.style.display='flex'
            // hamburger.textContent='hide'
        }
        else{   
            navbar.style.display=''
            // hamburger.textContent='show'
        }
    });
    