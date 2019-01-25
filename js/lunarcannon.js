let expanded = 0;
$('.vid-element a').on('click', function(event){
  // $(this).parent().children("div, p").animate({height: "toggle"}, 250);
  if(expanded === 0){
    var url = location.href;
    vidURL(event);
    // $(".vid-expand").append(`<div class="vid-popup"><div class="vid-embed">
    //   <iframe src="https://www.youtube.com/embed/pmiduYrGXiU" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // </div></div>`);
    $(".vid-expand").animate({height:"100%"},250);
    location.href = "#vidplayer";
    history.replaceState(null,null,url);
    expanded = 1;
  } else {
    $(".vid-expand").animate({height:"0px", opacity:"0"},300).text(``);
    expanded = 0;
  }
});

function vidURL(click){
  let vidLink = $(click).children().val();
  console.log(vidLink);
  return vidLink;
}
