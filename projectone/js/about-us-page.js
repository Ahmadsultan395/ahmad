const hamburger=document.getElementById('hamburger');
const menu =document.getElementById('menu');



hamburger.addEventListener('click',function(){
        if(!menu.style.display){
            menu.style.display='flex'
            // hamburger.textContent='hide'
        }
        else{   
            menu.style.display=''
            // hamburger.textContent='show'
        }
    });
    
