var m1 = '<canvas id="myCanvas" style="position:absolute;z-index:2;left:0;top:190px;" resize="true" width="100" height="100"></canvas><div id="output" style="color:rgb(255, 255, 255);z-index:1; position:absolute;left:0;top:0px;font-size:10px;display:none;"></div><div id="lmp" class="center imgxd preventSelect" style="position: absolute; z-index: 3;"> <img src="img/lamp_xd.png" alt="lamp XD"></div><div id="wor" class="what preventSelect" style="position: absolute; z-index: 3;"> <img src="img/whatt1.png" alt="whatt XD"></div>';
var colors = ["#3B0900", "#3B2700", "#323B00", "#143B00", "#330124", "#290133", "#011B33", "#323232", "#3B1F1F", "#242424"];
var mgg = ["U caN'T", "DEFEAT ME IF u CAN :]", "tRY hARder :)", "hehE aLmosT DID it", "___LOL___"]
var pl = false;

function sta (){
    document.body.style.backgroundColor = "black";

    document.body.innerHTML = "";
    document.body.innerHTML = m1;

    var s7 = document.createElement("script");
    s7.src = "./script/main.js";
  
    document.head.appendChild(s7);    

}

function lo(){
    const audio = document.getElementsByClassName("song")[0];
    const button = document.getElementById("run");
    var scalen = 1;
    const animateMove = (element, prop, pixels) =>
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
      });
    
    ["mouseover"].forEach(function (el) {
      button.addEventListener(el, function (event) {
        if(!pl){audio.volume = 1; audio.play();}
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);
    
        animateMove(this, "left", left).play();
        animateMove(this, "top", top).play();
        document.title = mgg[Math.floor(Math.random() * mgg.length)];
      });
    });
    
    button.addEventListener("click", function (event) {
        //alert("CLICKED");
        if (scalen <= .8){
            sta();
            return;
        }
        scalen -= .1;
        console.log(`transform: scale(${scalen});`);
        button.style = `transform: scale(${scalen});`;
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
    });
    const getRandomNumber = (num) => {
      return Math.floor(Math.random() * (num + 1));
    };

}

//audio.addEventListener("canplaythrough", function() {
    //audio.play();
  //});


