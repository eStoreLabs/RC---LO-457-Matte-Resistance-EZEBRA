const videoPlayerButton = document.querySelector('.es-video__play-button');
// videoPlayer = document.getElementById('player');

videoPlayerButton.addEventListener('click', function () {
  document.getElementById('player-desktop').play();
  videoPlayerButton.style.display = 'none';
});

// videoPlayer.addEventListener('ended', function () {
//   videoPlayerButton.style.display = 'block';
// });

const videoPlayerButtonDesktop = document.querySelector(
    '.es-video__play-button--desktop',
  ),
  videoPlayerDesktop = document.getElementById('player-desktop');

videoPlayerButtonDesktop.addEventListener('click', function () {
  document.getElementById('player-desktop').play();
  videoPlayerButtonDesktop.style.display = 'none';
});

videoPlayerDesktop.addEventListener('ended', function () {
  videoPlayerButtonDesktop.style.display = 'block';
});
