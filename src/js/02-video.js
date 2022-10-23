import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// не працює
import _ from 'lodash';

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
  }, 1000)
);

const currentTimeValue = localStorage.getItem('videoplayer-current-time');

if (currentTimeValue) {
  player.setCurrentTime(currentTimeValue);
}
