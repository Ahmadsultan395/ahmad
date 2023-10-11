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


   // portfolio/////////////////////////////////////////////////////////
//Get image preview container to show it in click of img
var previewContainer = document.querySelector('.img_preview_container');
//Get item image to show its preview on click
var imgItem = document.querySelectorAll('.item_img');
//Get img preview div to show image that you clicked
var imgPreview = document.querySelector('.img_preview');
//Get the close button to close image preview container
var close = document.getElementById('close');
//Get the next button to show the next image
var next = document.getElementById('next');
//Get the previous button to show the previous image
var prev = document.getElementById('prev');
// Array to push imgItem on it than you can store the index of image you want
var imgList = [];
var imgIndex = 0; // index of image variable
for (i = 0; i < imgItem.length; i++) // Loop for get each image
{
    imgList.push(imgItem[i]); // push to array
    imgItem[i].addEventListener('click', previewImg); // on click show preview
}
    function previewImg(e) // function to previw image on click
    {
        imgIndex = imgList.indexOf(e.target); // index number of the clicked image
        var imgSrc = e.target.src; // function to store source of the clicked image
        imgPreview.style.backgroundImage = "url(" + imgSrc + ")"; //use src as bg
        previewContainer.style.display = 'block'; // display preview container
    }


close.addEventListener('click', hidePreview);// on click close preview


function hidePreview() { //close preview

    previewContainer.style.display = 'none';
}

next.addEventListener('click', nextImg);// on click show next img

function nextImg() {// show next img

    imgIndex++;//index num +1
    if (imgIndex == imgList.length) {//to go to first img again

        imgIndex = 0;
    }
    imgPreview.style.backgroundImage = "url(" + imgItem[imgIndex].src + ")";
}

prev.addEventListener('click', prevImg);// on click show previous img

function prevImg() {//show previous img

    imgIndex--;//index num -1
    if (imgIndex < 0) {// to go to last img

        imgIndex = imgList.length - 1;
    }
    imgPreview.style.backgroundImage = "url(" + imgItem[imgIndex].src + ")";
}