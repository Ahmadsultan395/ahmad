$(document).ready(function(){
    $('#name, #mail , #age').focus(function(){
        $(this).css('background','lightblue');
    })
    $('#name, #mail , #age').blur(function(){
        $(this).css('background','white');
    })
    $('#name, #mail , #age').select(function(){
        $(this).css('background','yellow');
    })
    $('#myform').submit(function(){
        alert('form submited')
    })
    $('#name').change(function(){
        // alert('form submited')
        var a =$('#name').val();
        $('.text').html(a);
    })

    $(window).resize(function(){
        console.log("window resizing");
    })
    $(window).scroll(function(){
        console.log("window scrolling");
    })

    // load and unload not suported in j query
    // $(window).load(function(){
    //     console.log("window resizing");
    // })


    $('.addclass').click(function(){
        $('.cont').addClass('clr');    
    })
    $('.removeclass').click(function(){
        $('.cont').removeClass('clr');    
    })
    $('.toggleclass').click(function(){
        $('.cont').toggleClass('clr');    
    })
})