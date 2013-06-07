
module.exports = function(canvas, x, y){
  var ctx = canvas.getContext('2d');

  ctx.translate(
    x ? canvas.width : 0,
    y ? canvas.height : 0);

  ctx.scale(
    x ? -1 : 1,
    y ? -1 : 1);
};
