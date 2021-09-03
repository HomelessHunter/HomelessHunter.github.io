
setupPlayer(0);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
let player;
let promoPlayer;
let musicPlayer;
let eventPlayer;
async function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height: '1080px',
      width: '1920px',
      videoId: 'hkOUrAbRdzE',
      playerVars: {'autoplay': '1', 'mute': '1', 'loop': '1', 'controls': '0', 'frameborder': '0', 'playlist': 'hkOUrAbRdzE' },
      events: {
        'onReady': onPlayerReady
      }
  });

  loadPromoPlayer();
  loadMusicPlayer();
  loadEventPlayer();
}

async function loadPromoPlayer(){
  promoPlayer = new YT.Player('player-promo', {
    height: '1080px',
    width: '1920px',
    videoId: 'VFymwxm1grI',
    playerVars: {'autoplay': '1', 'mute': '1', 'loop': '1', 'controls': '0', 'frameborder': '0', 'modestbranding': '1', 'disablekb': '1', 'playlist': 'VFymwxm1grI' },
    events: {
      'onReady': onGalleryPlayerReady
    }
  });
}

async function loadMusicPlayer(){
  musicPlayer = new YT.Player('player-music', {
    height: '1080px',
    width: '1920px',
    videoId: '5yWRhEXX31w',
    playerVars: {'autoplay': '1', 'mute': '1', 'loop': '1', 'controls': '0', 'frameborder': '0','modestbranding': '1', 'disablekb': '1', 'playlist': '5yWRhEXX31w' },
    events: {
      'onReady': onGalleryPlayerReady
    }
  });
}

async function loadEventPlayer(){
  eventPlayer = new YT.Player('player-events', {
    height: '1080px',
    width: '1920px',
    videoId: 'otK-jWsDV5A',
    playerVars: {'autoplay': '1', 'mute': '1', 'loop': '1', 'controls': '0', 'frameborder': '0', 'modestbranding': '1', 'disablekb': '1', 'playlist': 'otK-jWsDV5A' },
    events: {
      'onReady': onGalleryPlayerReady
    }
  });
}

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

  function onGalleryPlayerReady(event) {
    event.target.stopVideo();
  }

  function setupPlayer(index){
    const api = "https://www.youtube.com/iframe_api";
    const tag = document.createElement('script');
    tag.src = api;
    const scriptTag = document.getElementsByTagName('script')[index];
    scriptTag.parentNode.insertBefore(tag, scriptTag);
  }

  // Animation
  const goPage = document.querySelector('.go-page');
  const goButton = document.getElementById('go');
  const gallery = document.querySelector('.gallery');
  const closeButton = document.getElementById('close');
  const bioButton = document.getElementById('bio');

  goPage.style.animationPlayState = 'paused';
  gallery.style.animationPlayState = 'paused';

  goButton.onclick = () => {
    bioButton.style.display = 'none';
    closeButton.style.display = 'block';
    goPage.className = 'go-page';
    goPage.style.animationPlayState = 'running';
    gallery.className = 'gallery';
    gallery.style.animationPlayState = 'running';
    gallery.style.display = 'flex';
    setTimeout(playGallery, 1000);
  };

  closeButton.onclick = () => {
    closeButton.style.display = 'none';
    bioButton.style.display = 'block';
    goPage.className = 'go-page-reverse';
    goPage.style.animationPlayState = 'running';
    gallery.className = 'reverse-gallery';
    gallery.style.animationPlayState = 'running';
    gallery.style.display = 'none';
    stopGallery();
  }

function playGallery() {
  player.stopVideo();
  promoPlayer.playVideo();
  musicPlayer.playVideo();
  eventPlayer.playVideo();
}

function stopGallery() {
  player.playVideo();
  promoPlayer.stopVideo();
  musicPlayer.stopVideo();
  eventPlayer.stopVideo();
}
  