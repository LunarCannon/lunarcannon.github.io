let expanded = 0;
$('.vid-thm img').mouseover().css("cursor","pointer");
$('.vid-thm img').on('click', function(event){
  // $(this).parent().children("div, p").animate({height: "toggle"}, 250);
  if(expanded === 0){
    let selectedVid = vidURL(event.target);
    var url = location.href;
    if(selectedVid == 0){
      $(".vid-expand").append(`<div class="spacer-20"></div><div class="close-vid"><i class="fas fa-window-close close-icon"></i></div><div class="vid-popup"><div class="vid-embed">
        <iframe src="https://www.youtube.com/embed/pmiduYrGXiU" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div></div>`);
    }
    $(".vid-expand").animate({height:"100%", opacity:"1"},250);
    location.href = "#vidplayer";
    history.replaceState(null,null,url);
    expanded = 1;
    closeVid();
  } else {
    $(".vid-expand").animate({height:"0px"},300).empty();
    expanded = 0;
  }
  $('.vid-expand i').mouseover().css("cursor","pointer");
});

function closeVid(){
  $(".close-icon").on("click", function(e){
    if(expanded == 1){
      console.log("close");
      $(".vid-expand").animate({height:"0px"},300).empty();
      expanded = 0;
    }
  });
}

function vidURL(click){
  let vidLink = $(click).attr("alt");
  console.log(vidLink);
  return vidLink;
}
