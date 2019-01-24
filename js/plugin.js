/*global $, alert, console, mixitup,containerEl*/

$(document).ready(function () {
    "use strict";
    
    //Make the height of header section the height of window viewport
    $("header").height($(window).height());
    $(window).on("resize", function () { 
        $("header").height($(window).height());     
    });


    //when click on menu button in small screens

    var mobileBars = document.getElementById('largeHide');
    var mobileMenu = document.getElementById('for_mobile');
    
    mobileBars.onclick = function(){
        this.children[0].classList.toggle('fa-bars');
        this.children[0].classList.toggle('fa-times');
        mobileMenu.classList.toggle('show');
        if(mobileMenu.classList.contains('show')){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
        }
    }
    


    // ANIMATING MAIN HEADER TYPING!
    var headeingArray = ['this is concard a digital agency in new york.','concard is a global creative agency with 12 offices worldwide','We are a multi-award winning digital agency'];
    var mainHeader = document.getElementById("heading");

    function autoTying(){
        mainHeader.style.opacity = '1';
        mainHeader.textContent = '';
        var randomNum = Math.floor(Math.random() * headeingArray.length);
        var i = 0;
        var text = headeingArray[randomNum];
        var effect = setInterval(function(){  
            mainHeader.textContent += text[i];
                i++ 
            if (i == text.length){
                mainHeader.textContent = text;
            clearInterval(effect);
            changeText()
            }
        },60);
    }
    autoTying();

   function changeText(){
    
    setTimeout(function(){
        mainHeader.style.opacity = '0';
        autoTying();
    }, 2300);
    }


   


    // adjusting hover on images in about section
    
    $(".about .outer .dbl").hover(function () {
        $(this).find("img").css("transform", "scale(1.2)"); 
        $(this).find(".over-lay").fadeIn(1000).css("transform", "scale(1.2)");   
    }, function () { 
        $(this).find(".over-lay").hide();
        $(this).find("img").css("transform", "scale(1)");
        
    });


    
    
    // buttons to chnages authors 
 
    function folioToggle(){
        var folioArrows = document.querySelectorAll('.folio_toggle i');
        var folioMain = document.querySelectorAll('.our-p div');
        var leftArrow = folioArrows[0];
        var rightArrow = folioArrows[1];
        var i = 0;
    
        rightArrow.onclick = function(){
                folioMain[i].style.display = 'none';
                i++;
                folioMain[i].style.display = 'block';
                if (i == folioMain.length-1){
                    rightArrow.style.visibility = 'hidden';
                }
                if (i > 0){
                    leftArrow.style.visibility = 'visible';  
                }
        }
    
        leftArrow.onclick = function(){
            folioMain[i].style.display = 'none';
            i--;
            folioMain[i].style.display = 'block';
            if (i == 0){
                leftArrow.style.visibility = 'hidden'; 
                rightArrow.style.visibility = 'visible'; 
            }
            if (i > 0){
                leftArrow.style.visibility = 'visible';  
            }
            if (!(i == folioMain.length-1)){
                rightArrow.style.visibility = 'visible';
            }
        }
    }
    
    folioToggle()




    // adjusting second navmenu when scrolling
    
    $(window).scroll(function () {
        
        var wScroll = $(window).scrollTop();
        
        if (wScroll > 150) {
            
            $(".head-2").slideDown();
            
        } else {
            
            $(".head-2").slideUp();
            
        }
    });
    
    
    // clicking on h3 in section solutions to toggle p
    

    $(".solutions .right div").on("click", function () {
        this.children[2].classList.toggle('zeroHeight');
        this.children[0].classList.toggle('rotate');
        this.children[1].classList.toggle('colorIt');
        
        var otherP = $(this).siblings().find("p");
        for(var i = 0; i <otherP.length;i++ ){
            otherP[i].classList.add('zeroHeight');
        }
        var otheri = $(this).siblings().find("i");
        for(var i = 0; i <otherP.length;i++ ){
            otheri[i].classList.remove('rotate');
        }

        var otherh = $(this).siblings().find("h3");
        for(var i = 0; i <otherh.length;i++ ){
            otherh[i].classList.remove('colorIt');
        }

        
    });
    	
    
    
    document.addEventListener('scroll',function move() {
        var scrolling = $(window).scrollTop();    
        var studyOffset = $(".study").offset().top;
        
        if (scrolling >= studyOffset - 300) {
            $(".study .right .center").show(); 
            $('.timer').countTo();
            document.removeEventListener('scroll',move)
        }
        
    });
    
      // start selecteing links in recent sec,
    
    $(".recent ul li").click(function () {
        
        $(this).addClass("selectedone").siblings().removeClass("selectedone");
        
        
    });
    
     // back to top code
    
    $(".footer .float-r span").click(function () {
        
        $("html,body").animate({
            
            scrollTop : 0
            
        }, 600);
        
    });
    
    
    
    // start links to sections cooode 
    
    $("header  ul li a ").click(function () {
        
        $("html").animate({
            
            scrollTop : ($("#" + $(this).data("shady")).offset().top -100)
            
        }, 600);
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // start mixXXXXXXXITUP 
    
    var mixer = mixitup('.container1'),
    
        mixer = mixitup(containerEl),
    
        mixer = mixitup(containerEl, {
            selectors: {
                target: '.blog-item'
            },
            animation: {
                duration: 300
            }
        });
    
  
   
    
 
    

    
});