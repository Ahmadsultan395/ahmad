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
    

    ///////////////////////////

	// sevice section start////////////////////////////////////////
	let i=2;

	
	$(document).ready(function(){
		var radius = 200;
		var fields = $('.itemDot');
		var container = $('.dotCircle');
		var width = container.width();
 radius = width/2.5;
 
		 var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			if(window.console) {
				console.log($(this).text(), x, y);
			}
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
		
		
		$('.itemDot').click(function(){
			
			var dataTab= $(this).data("tab");
			$('.itemDot').removeClass('active');
			$(this).addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+ dataTab).addClass('active');
			i=dataTab;
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-1)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-1)*36)+"deg)",
				"transition":"1s"
			});
			
			
		});
		
		setInterval(function(){
			var dataTab= $('.itemDot.active').data("tab");
			if(dataTab>6||i>6){
			dataTab=1;
			i=1;
			}
			$('.itemDot').removeClass('active');
			$('[data-tab="'+i+'"]').addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+i).addClass('active');
			i++;
			
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-2)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-2)*36)+"deg)",
				"transition":"1s"
			});
			
			}, 5000);
		
	});

///end////////////////////////////////////////////////////////////////////////////////////


//  counter bar start////////////////////////////

 
 $(document).ready(function(){
	 $('.counter-value').each(function(){
		 $(this).prop('Counter',0).animate({
			 Counter: $(this).text()
		 },{
			 duration: 3500,
			 easing: 'swing',
			 step: function (now){
				 $(this).text(Math.ceil(now));
			 }
		 });
	 });
 });

//  counter bar end????/////////////////////////////


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