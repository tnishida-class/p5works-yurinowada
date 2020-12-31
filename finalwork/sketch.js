// 最終課題"ダーツで大当たり"

let cx, cy, maxR;

function setup(){
  let green = color(0, 255, 0);
  let red = color(255, 0, 0);
  let black = color(0);
  let cream = color(242, 212, 147);
  createCanvas(1000, 1000);
  background(178, 100, 162);
  stroke(200);
  strokeWeight(5);

  cx = width / 2;
  cy = height / 2;
  maxR = min(width, height);

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(cream,black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(cream, black, maxR * 0.45);
  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }

  function draw(){
    background(160, 192, 255);
    star(x,y,50,10);
    background(0,0,153);
    fill(255,243,82)
    star(x,y,100,a)
    x += 2;
    y += 2;
    a += 0.05;

    if(x > width){ x = 0; }
    else if(x < 0){ x = width; }
    if(y > height){ y = 0; }
    if(y < 0){ y = height; }
  }

  function star(cx, cy, r, angle){
    noStroke();
    beginShape();
    for(var i = 0; i < 20; i++){
      var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
      var x = cx + cos(theta) * r;
      var y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
}
