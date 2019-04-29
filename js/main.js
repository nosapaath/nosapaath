$(function(){
  $(window).onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  console.log('%c Hire Me!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
  let close = true; 

  const handleClick = function(){
    close = !close;
    const menu = document.getElementById("navMenu");
    if(menu.style.display === "flex"){
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
  $('#exitBtn').on('click', handleClick);

  
  $(window).on('load' , function(){
    $("#pinkBox").animate({width:'50%'});
  });


  $(window).on('scroll' , function(){
    let scroll_pos = $(window).scrollTop();
    // const element_pos = $("#pinkBox")[0].offsetTop;
    if (scroll_pos < 120) {
      $("#pinkBox").css({width:'50%'});
      $(".greeting").css({left:'100px'});
      $("#firstTitle").css({fontSize:'2rem', color:'transparent'});
      $(".greeting_hide").css({display:'hidden'});
    } else {
      $("#pinkBox").css({width:'100%'});
      $(".greeting").css({left: '10px'});
      $("#firstTitle").css({fontSize:'3.1rem', color:'white'});
      $(".greeting_hide").css({display:'block'});
    }
  });

// when id showProject distance from top of screen is halfway, start animation
  $(window).on('scroll', function(){
    const topToSection = window.pageYOffset + window.outerHeight;
    const projectSection = $('#showProject')[0].offsetTop + 200;
    const n = $('.projectJs').length;
    console.log(n);
    if(topToSection >= projectSection){
      $('.projectJs').css({width:'100%'});
    } else {
      $('.projectJs').css({width:'0%'});
    }
  })
});