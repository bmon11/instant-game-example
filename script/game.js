console.log("Game loading")

const arr = [
  './img/last_supper.jpg',
  './img/s3bgr.jpg',
  './img/maxresdefault.jpg',
  './img/Screenshot from 2020-03-28 10-07-12.png'
]
min = 0;

FBInstant.initializeAsync()
  .then(function() {
      let progress = 0;
      var interval = setInterval(function() {
          if (progress>=95) {
              clearInterval(interval);
              FBInstant.startGameAsync()
                .then(function() {
                      console.log("game started")

                      const playerPic = FBInstant.player.getPhoto();
                      const playerName = FBInstant.player.getName();
                      let txt = playerName + ' таны 2021 оны бэлэг';
                      let img1 = new Image();
                      let ind = randomNumber(min, arr.length);
                      console.log(ind)
                      img1.src = arr[ind]
                      let img = new Image();
                      img.src = playerPic;
                      img.onload = function() {
                        let canvas = document.getElementById("myCanvas");
                        let ctx = canvas.getContext('2d');
                        ctx.font = "30px Arial";
                       
                        ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
                        ctx.fillText(txt , 30, 270, 250, 20);
                        ctx.drawImage(img, 0,0,150,240);
                        ctx.drawImage(img1, 151,0,149,240);
                        
                      }

                    }
                )
          }
        FBInstant.setLoadingProgress(progress);
        progress+=5;
      }, 100)
  }
);


function randomNumber(min, max){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}



//https://www.facebook.com/embed/instantgames/798328177382580/player?game_url=https://localhost:8080

