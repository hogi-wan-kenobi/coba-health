//Navbar fade in
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });


///////////////////////////////////////////////////////////////
//Toggle Popup Visibility
function toggle_visibility(id) {
			       var e = document.getElementById(id);
			       if(e.style.display == 'block')
			          e.style.display = 'none';
			       else
			          e.style.display = 'block';
			    }
                        window.onclick = function(event) {
        var a = document.getElementById('popupBoxOnePosition')
    if (event.target == a && a.style.display == 'block') {
        a.style.display = "none";
    }}
                        
///////////////////////////////////////////////////////////////
//Play and Pause Videos
var player1;
var player2;
var player3;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player1 = new YT.Player("intro-video-pop");
    player2 = new YT.Player("intro-video");
    player3 = new YT.Player("patient-video");
}


function playVideo1 () {
    player1.playVideo();
}
function playVideo2 () {
    player2.playVideo();
}
function playVideo3 () {
    player3.playVideo();
}

function pauseVideo1() {
    player1.pauseVideo();
}
function pauseVideo2() {
    player2.pauseVideo();
}
function pauseVideo3() {
    player3.pauseVideo();
}



// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);