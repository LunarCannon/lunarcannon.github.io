let expanded = 0;
$('.vid-thm img, .vid-element h3').mouseover().css("cursor","pointer");
$('.vid-thm img, .vid-element h3').on('click', function(event){
  // $(this).parent().children("div, p").animate({height: "toggle"}, 250);
  console.log(expanded);
  if(expanded === 0){
    let selectedVid = vidURL(event.target);
    let vidTitle = $(event.target).parent().siblings('h3').text();
    console.log(vidTitle, " vid title");
    var url = location.href;
    if(selectedVid == 0){
      popupFadeIn(vidTitle);
      $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/pmiduYrGXiU" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    } else if(selectedVid == 1){
      popupFadeIn(vidTitle);
      $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/yo6PT3rLDOQ" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    } else if(selectedVid == 2){
      popupFadeIn(vidTitle);
      $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/ljMeCBNpreg" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    } else if(selectedVid == 3){
      popupFadeIn(vidTitle);
      $('.vid-embed').append('<iframe src="https://www.youtube.com/embed/LTCvCgB8P8k" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
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
  $('.vid-popup').slideDown(300);
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
  $(".vid-popup").slideUp(300, function(){$('.vid-embed iframe').remove();});
  expanded = 0;
}

function vidURL(click){
  let vidLink = $(click).attr("alt");
  console.log(vidLink);
  return vidLink;
}
