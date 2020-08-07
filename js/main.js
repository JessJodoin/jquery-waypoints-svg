var $mammals = $('.mammals');
var $plesio = $('.plesio');
var $dino = $('.dino');
var $ptero = $('.ptero');

$mammals.waypoint(function () {
  $mammals.addClass('js-wrapper');
}, { offset: '35%' });

$plesio.waypoint(function () {
  $plesio.addClass('js-wrapper');
}, { offset: '35%' });

$dino.waypoint(function () {
  $dino.addClass('js-wrapper');
}, { offset: '35%' });

$ptero.waypoint(function () {
  $ptero.addClass('js-wrapper');
}, { offset: '35%' });
