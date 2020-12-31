// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(0, 0, 200, 50, 50, "I love keyakizaka46");
}
  function balloon(a1, a2, a3, x, y, t){
  push();
  noStroke();

  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;

  fill(a1, a2, a3);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h + p);
  fill(a1, a2, a3);
  triangle(x + w + p * 2, y, x + w + p * 2 + 20, y, x + w + p * 2, y + 10, )
  pop();
}
