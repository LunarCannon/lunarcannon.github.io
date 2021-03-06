

let theURL = $(location).attr("href");
if(theURL.includes("marketing")){
  console.log(theURL);
  let expanded = 0;

  $('.lc-circle-logo').animate({opacity:1, top: "-=35px"}, 800, "easeInOutQuint");
  $('.text-box-fade').animate({opacity:1}, 800, "easeInOutQuint");
  $('.fade-text').css("rotate","0deg").delay(50).animate({opacity:1, top: "-=10px"}, 500, "easeInOutQuint", function(){
    $('.heart-anim').delay(400).animate({deg: 35},{duration: 400, step: function(now) {
        $(this).css({color:"#ab4545", transform: 'rotate(' + now + 'deg)'});
      }
    }).delay(700).animate({deg:0},{duration:460, step: function(now){
      $('.heart-anim').css({color:"#888", transform: 'rotate(' + now + 'deg)'});
    }});
  });



  $('.logo-roll').delay(600).animate({opacity:1, top: "-=10px"}, 800, "easeInOutQuint");

  $('.vid-thm img, .vid-element h3').mouseover().css("cursor","pointer");
  $('.vid-thm img, .vid-element h3').on('click', function(event){
    // $(this).parent().children("div, p").animate({height: "toggle"}, 250);
    console.log(expanded);
    if(expanded === 0){
      let selectedVid = vidURL(event.target);
      let vidTitle = $(event.target).parent().siblings('h3').text();
      if(vidTitle == ''){
        vidTitle = $(event.target).text();
        console.log(vidTitle, " vid title");
      }

      var url = location.href;
      if(selectedVid == 0){
        popupFadeIn(vidTitle);
        $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/pmiduYrGXiU?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      } else if(selectedVid == 1){
        popupFadeIn(vidTitle);
        $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/yo6PT3rLDOQ?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      } else if(selectedVid == 2){
        popupFadeIn(vidTitle);
        $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/gRWB_b9dkIg?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      } else if(selectedVid == 3){
        popupFadeIn(vidTitle);
        $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/LTCvCgB8P8k?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      }
      // $(".vid-expand").animate({height:"100%", opacity:"1"},250);
      // location.href = "#vidplayer";
      // history.replaceState(null,null,url);
      expanded = 1;
      closeVid();
    } else {
      closePopup();
    }
    $('.close-icon').mouseover().css("cursor","pointer");

    $('#popup-bg').on('click',function(){
      closePopup();
    });
  });

  function popupFadeIn(vidTitle){
    $('#popup-bg').fadeIn(300);
    $('.vid-popup').slideDown(500, "easeInOutCirc");
    $('.close-vid').append(`<h3 class="vid-popup-title">${vidTitle}</h3>`).hide().fadeIn(500);
  }

  function closeVid(){
    $(".close-icon").on("click", function(e){
      if(expanded == 1){
        closePopup();
      }
    });
  }

  function closePopup(){
    $('#popup-bg').fadeOut(300);
    $('.vid-popup-title').fadeOut(300);
    $(".vid-popup").slideUp(500, "easeInOutCirc", function(){$('.vid-embed iframe').remove();});
    expanded = 0;
  }

  function vidURL(click){
    let vidLink = $(click).attr("alt");
    console.log(vidLink);
    return vidLink;
  }
} else {
  console.log("nope");
  $('.lc-logo-home').animate({opacity:1, top:"-=10px"},800, "easeInOutQuint");
  $('.hey-text').delay(100).animate({opacity:1, top:"-=10px"},800, "easeInOutQuint");
  $('.text-move-right').delay(200).animate({opacity:1, left:"+=20px"},800, "easeInOutQuint");
  $('.box-1').css("top","-10px").delay(250).animate({opacity:1, top:"+=10px"},1000, "easeInOutQuint");
  $('.box-2').css("top","-10px").delay(300).animate({opacity:1, top:"+=10px"},1000, "easeInOutQuint");
  $('.footer').css("opacity",0).delay(300).animate({opacity:1},800, "easeInOutQuint");
}
