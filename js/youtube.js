function makeYouTube(e) {
  var t=document.createElement("img");
  t.style.cssText="cursor:pointer;cursor:hand";
  e.appendChild(t);

  var a=document.createElement("div");
  var id="youtube-player-" + e.getAttribute('id');
  a.setAttribute("id", id);
  e.appendChild(a);
  var o=function(e){
    var a=e?"0bPOOe7.png":"ASXlQSp.png";
    t.setAttribute("src","https://i.imgur.com/"+a)
  };
  e.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  var r=new YT.Player(id,{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})
}

function onYouTubeIframeAPIReady() {
  var elements = document.querySelectorAll('.youtube-player'), i;
  for (i = 0; i < elements.length; i++) {
    makeYouTube(elements[i]);
  }
 }
