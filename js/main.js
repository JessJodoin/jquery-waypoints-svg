var $mammals = $('.mammals');
var $plesio = $('.plesio');
var $dino = $('.dino');
var $ptero = $('.ptero');

$mammals.waypoint(function (direction) {
  $mammals.addClass('js-wrapper');
}, {offset: '15%'});

$plesio.waypoint(function (direction) {
  $plesio.addClass('js-wrapper');
}, {offset: '50%'});

$dino.waypoint(function (direction) {
  $dino.addClass('js-wrapper');
}, {offset: '50%'});

$ptero.waypoint(function (direction) {
  $ptero.addClass('js-wrapper');
}, {offset: '50%'});
