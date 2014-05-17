var logo = document.querySelector('a.full');
var url = '/assets/themes/twitter/chains.mp3';
var audioContext;
var source;

function init() {
  audioContext = genAudioContext();
  loadFile(url);
}

window.addEventListener('load',init,false);

function loadFile(url) {
  var req = new XMLHttpRequest();
  req.open("GET",url,true);
  req.responseType = "arraybuffer";
  req.onload = function() {
    audioContext.decodeAudioData(req.response, function(buf) {
      source = audioContext.createBufferSource(); 
      source.buffer = buf;
      source.connect(audioContext.destination);

      logo.addEventListener('click', function() {
        var bod = document.body;
        if (bod.className.length) {
          bod.className = '';
          stop();
        } else {
          bod.className = "prism";
          play();
        }
      }, false);
      console.log('PRISM MODE ENABLED!!');
    });
  };
  req.send();
}

function play(src) {
  source.start(0);
}

function stop() {
  source.stop(0);
}

function genAudioContext () {
  var context;

  if (typeof AudioContext !== "undefined") {
    context = new AudioContext();
  } else if (typeof webkitAudioContext !== "undefined") {
    context = new webkitAudioContext();
  } else {
    throw new Error('AudioContext not supported. :(');
  }

  return context;
}
