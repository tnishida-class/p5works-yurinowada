// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(400, 400);
  count = 0;
  cycle = 300;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1.5) % cycle;
  if(count > 0 && count < cycle / 2){size = 40 + count;}
  if(count >= cycle / 2 && count < cycle){size = cycle + 40 - count;}
  //BLANK[1]
 noStroke();
 fill(200, 15, 50);
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
