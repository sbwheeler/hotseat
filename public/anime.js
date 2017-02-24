const anime = require('animejs') 

anime({
  targets: 'div',
  translateX: '13.5rem',
  scale: [.75, .9],
  delay: function(el, index) {
    return index * 80;
  },
  direction: 'alternate',
  loop: true
});