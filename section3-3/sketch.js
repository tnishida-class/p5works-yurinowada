// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    console.log(i + "年は" + daysInYear(i) + "日あります");
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  }

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){

  let count = 0
 for( let t = 1970; t < y; t++){
   count += daysInYear(t);
 }
 for( let p = 1; p < m; p++){
   count += daysInMonth(y, p);
 }
 count += d;
 if(count % 7 == 1){
   return 4;
 }
 else if(count % 7 == 2){
   return 5;
 }
 else if(count % 7 == 3){
   return 6;
 }
 else if(count % 7 == 4){
   return 0;
 }
 else if(count % 7 == 5){
   return 1;
 }
 else if(count % 7 == 6){
   return 2;
 }
 else {
   return 3;
 }

  // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
