// navbar

// end
// =========/

// hero section
$(document).ready(function () {
  
    // background color
    var herosection=document.querySelector('.hero-section');
    herosection.addEventListener("mouseover",function(){
            document.querySelector('.hero-section').style.background="#8510cddd";
    });
    herosection.addEventListener("mouseout",function(){
            document.querySelector('.hero-section').style.background="#024571";
    });

    $('.hero-section-content').mouseover(function(){
        $('.hero-section-title h1').animate({
            top:'3000px',
        },3000); 
    });
    
});

// end
// ====================


// owl carasoul
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        // items:1,
        loop: true,
        margin: 10,
        nav: true,
        stagePadding: 50,
        smartSpeed: 450,
        pullDrag: true,
        // autoplay:true,
        // autoplayTimeout:1000,
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        video: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
// end

// form validation


$("#myform").validate({
rules:{
    name:{
        minlength: 2,
    },
    email:{
        email:true,
    },
    phone:{
        Number:true,
        minlength:11,
        maxlength:11, 
    },
},

messages:{
    name:{
    required: " Please Enter your name",
    minlength: jQuery.validator.format("Please  at least 2 character")
    },
        email: "please enter a valid email",
        phone: "please enter a valid phone number",
},



    submitHandler: function(form) {
      form.submit();
    }
   });