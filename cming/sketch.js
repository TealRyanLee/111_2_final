// let points = [
// [7,10],[12,6],[12,4],[9,1],[10,-2],[10,-7],[5,-10],[1,-11],[1,-13],[-3,-13],[-14,-4],[-13,4],
// [-11,9],[-12,13],[-10,16],[-8,17],[-5,13],[3,13],[7,16],[10,15],[10,13],[7,10]
// ]


let points =[[129*0.5, 9*0.5], [98*0.5, 17*0.5], [77*0.5, 36*0.5],[150*0.5,56*0.5],[143*0.5,71*0.5],[124*0.5,80*0.5],[102*0.5,80*0.5],[82*0.5,71*0.5],[99*0.5,92*0.5],[127*0.5,96*0.5],[99*0.5,92*0.5],[99*0.5,131*0.5],[84*0.5,174*0.5],[53*0.5,188*0.5],[19*0.5,207*0.5],[0*0.5,261*0.5],[5*0.5,281*0.5],[10*0.5,289*0.5],[14*0.5,290*0.5],[21*0.5,288*0.5],[27*0.5,294*0.5],[32*0.5,289*0.5],[40*0.5,292*0.5],[42*0.5,285*0.5],[42*0.5,264*0.5],[58*0.5,240*0.5],[72*0.5,215*0.5],[58*0.5,240*0.5],[52*0.5,281*0.5],[63*0.5,314*0.5],[40*0.5,353*0.5],[51*0.5,396*0.5],[56*0.5,403*0.5],[51*0.5,408*0.5],[70*0.5,406*0.5],[68*0.5,412*0.5],[84*0.5,408*0.5],[86*0.5,411*0.5],[109*0.5,401*0.5],[104*0.5,376*0.5],[118*0.5,346*0.5],[107*0.5,343*0.5],[118*0.5,346*0.5],[144*0.5,346*0.5],[161*0.5,370*0.5],[166*0.5,396*0.5],[185*0.5,408*0.5],[237*0.5,386*0.5],[229*0.5,384*0.5],[232*0.5,375*0.5],[228*0.5,373*0.5],[229*0.5,350*0.5],[219*0.5,329*0.5],[202*0.5,314*0.5],[206*0.5,318*0.5],[219*0.5,292*0.5],[219*0.5,274*0.5],[212*0.5,240*0.5],[206*0.5,219*0.5],[197*0.5,205*0.5],[206*0.5,219*0.5],[238*0.5,204*0.5],[264*0.5,159*0.5],[265*0.5,110*0.5],[259*0.5,110*0.5],[254*0.5,101*0.5],[246*0.5,104*0.5],[240*0.5,99*0.5],[236*0.5,109*0.5],[228*0.5,104*0.5],[227*0.5,123*0.5],[217*0.5,151*0.5],[177*0.5,172*0.5],[170*0.5,125*0.5],[174*0.5,71*0.5],[167*0.5,37*0.5],[144*0.5,14*0.5],[129*0.5,9*0.5], [98*0.5, 17*0.5], [77*0.5, 36*0.5],[150*0.5,56*0.5]];

// let points = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2],[1,2]]; //list資料
var fill_colors = "001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226".split("-").map(a=>"#"+a)
var line_colors = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a)
// +++++++++++++++++++++++++
var ball //"目前要處理的物件，暫時放在ball變數內"
var balls=[] //把產生的"所有"的物件，為物件的倉庫，所有物件資料都在此
// +++++++++++++++++++++++++++++++++++
var bullet = [] //"目前要處理的物件，暫時放在bullet變數內"
var bullets = [] //把產生的"所有"的物件，為物件的倉庫，所有物件資料都在此
// ++++++++++++++++++
// +++++++++++++++++++++++++++++++++++
var monster = [] //"目前要處理的物件，暫時放在bullet變數內"
var monsters = [] //把產生的"所有"的物件，為物件的倉庫，所有物件資料都在此
// ++++++++++++++++++
//+++++++++++++++++++++++砲台位置
var shipP
//+++++++++++++++++++++++++++++++++
var score = 20
let gameover = false;

function preload(){
  dead_sound = loadSound("sound/Minecraft.mp3")
  bullet_sound = loadSound("sound/BOOM.mp3")
  monster_sound = loadSound("sound/Gun.mp3")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  shipP= createVector(width/2,height/2) //預設砲台位置
  for(var i=0;i<10;i=i+1){//i=0,1,2,3,4,8,10
    ball = new Obj({}) //產生一個Obj class元件
    balls.push(ball) //把ball的物件放到balls陣列內
}
 for(var i=0;i<30;i=i+1){//i=0,1,2,3,4,8,10
  monster = new Monster({}) //產生一個Monster class元件
  monsters.push(monster) //把ball的物件放到monsters陣列內
}
}
function draw() {
   background(220);
  // for(var j=0;j<balls.length;j=j+1){
  // ball=balls[j]
  // ball.draw()
  // ball.update()
  // }

  if(keyIsPressed){
    if(key=="ArrowLeft" || key=="a"){//往左
      shipP.x =shipP.x-5
      }
      if(key=="ArrowRight"|| key=="d"){//往右
        shipP.x =shipP.x+5
      }
      if(key=="ArrowUp"|| key=="w"){//往上
        shipP.y =shipP.y-5
      }
      if(key=="ArrowDown"|| key=="s"){//往下
        shipP.y =shipP.y+5
      }
  }
//++++++++++dino顯示
  for(let ball of balls)
  {
    ball.draw()
    ball.update()
    for(let bullet of bullets){
    if(ball.isBallInRanger(bullet.p.x,bullet.p.y)){
     balls.splice(balls.indexOf(ball),1)
     bullets.splice(bullets.indexOf(bullet),1)
     score =score+2
     textSize(20)
     fill(255)
     text("???",-50,0)
     dead_sound.play()
  }
}
  }
  for(let bullet of bullets)
  {
    bullet.draw()
    bullet.update()
  }

  for(let monster of monsters)
  {
    if(monster.dead == true && monster.timenum>4){
    monsters.splice(monsters.indexOf(monster),1) 
    }
    monster.draw()
    monster.update()
  for(let bullet of bullets){
      if(monster.isBallInRanger(bullet.p.x,bullet.p.y)){
      // monsters.splice(monsters.indexOf(monster),1) //從倉庫monster
       bullets.splice(bullets.indexOf(bullet),1)
       score =score - 1 
       monster.dead = true //代表該怪物已死掉
      dead_sound.play()
      monster_sound.play()
    }
  } 
  }
    textSize(50)
    text("剩餘擊殺數"+" "+score,50,50) //在座標為(50,50)上，顯示Scroe分數

  push() //重新規劃原點(0,0)，在視窗中間
  let dx = mouseX - width/2
  let dy = mouseY - height/2
  let angle = atan2(dy,dx)
  translate(shipP.x,shipP.y) //把砲台的中心點放在視窗中間
  fill("#6d6875")
  noStroke()
  rotate(angle)
  
  triangle(-25,-25,-25,25,50,30) //畫三個點，成一個三角形
  triangle(-25,-25,-25,25,50,-30)
  triangle(-25,-25,-25,25,50,0)
  ellipse(0,0,60,100)
  ellipse(-50,0,100,100)
  fill("#ffb5a7")
  ellipse(-50,0,75,75)
  ellipse(0,0,30,30)
  ellipse(0,-25,30,30)
  ellipse(0,25,30,30)
  pop() //恢復原本設定，原點(0,0)，在視窗左上角

  if(score<= 0){
    gameover=true
    background("#eddea4")
    textSize(100)
    textAlign(CENTER,CENTER)
    text("恭喜",width/2,height/2-100)
    text("王希銘特別來給你按讚",width/2,height/2)
    textSize(60)
    text("最終得分:"+score,width/2,height/2+100)
  }
  if(score>= 30){
    gameover=true
    background("#e56b6f")
    textSize(100)
    textAlign(CENTER,CENTER)
    text("Bruh",width/2,height/2-100)
    text("你跟恐龍有仇???",width/2,height/2)
    textSize(60)
    text("Try again",width/2,height/2+100)
  }
}

function mousePressed(){
//   ball= new Obj({
// p:{x:mouseX,y:mouseY}
//   })
//   balls.push(ball)
bullet = new Bullet({
  r:15,
  color:"red"})
 //在滑鼠按下的地方，產生一個新的bullet class的原件
bullets.push(bullet) //把bullet放到倉庫
bullet_sound.play()


// for(let ball of balls){
//   if(ball.isBallInRanger(mouseX,mouseY)){
//     balls.splice(balls.indexOf(ball),1)
//     score =score+1
//   }
// }
}

function keyPressed(){ //按下空白鍵，發射飛彈，按下滑鼠的功能一樣
  if(key==" "){
    bullet = new Bullet({
      r:15,
      color:"red"})
     //在滑鼠按下的地方，產生一個新的bullet class的原件
    bullets.push(bullet) //把bullet放到倉庫
    bullet_sound.play()
  }
}
