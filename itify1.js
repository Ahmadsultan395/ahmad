const hamburger=document.getElementById('hamburger');
const headerbg =document.getElementById('headerbg');

// hamburger.addEventListener('click',function(){
//     if(!headerbg[0].style.display){
//         headerbg[0].style.display='flex'
//         hamburger.textContent='hide'
//     }
//     else{   
//         headerbg[0].style.display='none'
//         hamburger.textContent='show'
//     }
// });
// header sticky //////////////////////////////////////////

hamburger.onclick=show;
function show(){
    if(!headerbg.style.display){
        headerbg.style.display='flex'
    }
    else{
        headerbg.style.display=''   

    }
}

