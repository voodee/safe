window.jQuery     = window.$ = require 'jquery'
plugin            = require 'plugin'



$(document).ready ->

  require './lib/jquery.nicescroll.js'
  $('html').niceScroll
    cursorcolor: '#1A212C'
    zindex: '99999'
    cursorminheight: 60
    scrollspeed: 80
    cursorwidth: 7
    autohidemode: true
    background: '#aaa'
    cursorborder: 'none'
    cursoropacitymax: .7
    cursorborderradius: 0
    horizrailenabled: false

  # require './lib/fss.js'
  # require './lib/shader.js'  

console.log 'load completed' 