var htm = ' <audio class="song" loop><source src="music/m.mp3"></source>Your browser isn\'t invited for super fun audio time.</audio> <button class="center btn btn-primary" id="str">CLICK ME</button> <div class="container"> <div class="one"> <h1 class="one">Hey <span id="name">EME!</span> </h1> <p class="two" id="greetingText">Our Silly Sister <br>🤗</p> </div> <div class="three"> <p>فجله كبرت بقت جرجير</p> <p>JUST kidding :D</p> </div> <div class="four"> <div class="text-box"> <p class="hbd-chatbox">Message: Happy birthday to you!! Yeee! blah...blah....</p> <p class="fake-btn">Send</p> </div> </div> <div class="five"> <p class="idea-1">That\'s what I was going to do.</p> <p class="idea-2">But then I stopped.</p> <p class="idea-3">I realised, I wanted to do something <strong>Special</strong>.</p> <p class="idea-4">Because,</p> <p class="idea-5">you are <b>OUR</b> SPECIAL<br> Silly <strong>Sister</strong> <br> <span>:)</span> </p> <p class="idea-6"> <span>S</span> <span>O</span> </p> </div> <div class="six" style="opacity: 1; display: block;"> <img src="img/photo3.png" style="width: 300px; height: 380px;" alt="" class="main-dp" id="imagePath"> <img src="img/hat.svg" alt="" class="hat"> <div class="wish"> <h3 class="wish-hbd">Happy Birthday!</h3> <h5 id="wishText">Wishing You A Truly Purrfect ✨ Sweet Birthday! 😋</h5> </div> </div> <div class="seven"> <div class="baloons"> <img src="img/ballon2.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon3.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon2.svg" alt=""> <img src="img/ballon1.svg" alt=""> <img src="img/ballon3.svg" alt=""> </div> </div> <div class="eight"> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" /> </svg> </div> <div class="nine"> <p id="gift">Open one Gift ONLY!</p> <div class="flexgbox"> <div><img id="gbox1" class="gbox" src="img/box1.png"/></div> <div><img id="gbox2" class="gbox" src="img/box2.png"/></div> </div> <p>Or</p> <p id="replay">click HERE, if you want to watch again.....</p> <p class="last-smile">:)</p> <div class="gif"> <img id="giftIMG1" class="gift" src="img/gift1.png" style="opacity: 0; display: none; width: 300px; height: 300px;"/> <img id="giftIMG2" class="gift" src="img/gift2.png" style="opacity: 0; display: none; width: 300px; height: 300px;"/> <span id="exitBtn" class="close cursor" onclick="closepic()" style="opacity: 0; display: none;">&times;</span> </div> </div> </div>';

console.log("HIIIIIII")
function sss(){
    const d1 = document.getElementById("myCanvas");
const d2 = document.getElementById("output");
const d3 = document.getElementById("wor");
const d4 = document.getElementById("lmp");
    d1.remove();
    d2.remove();
    d3.remove();
    d4.remove();

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style/style.css";
    var link1 = document.createElement("link");
    link1.rel = "shortcut icon";
    link1.type = "image/png";
    link1.href = "img/favicon.png";

    var s1 = document.createElement("script");
    var s2 = document.createElement("script");
    var s3 = document.createElement("script");

    s1.src = "script/babel.min.js";
    s2.src = "script/TweenMax.min.js";
    s3.src = "script/mm.js";
    
    //s3.onload = function(){str();};



    document.head.appendChild(link);
    document.head.appendChild(link1);  
    document.head.appendChild(s1);  
    document.head.appendChild(s2);  
    document.head.appendChild(s3);    
    document.title = 'Happy Birthday!!! :)';
    document.body.innerHTML = htm;

}

var aud = document.createElement("audio");
aud.src = "./music/dream.mp3";
aud.autoplay = true;
aud.loop = true
document.body.appendChild(aud)
aud.play();

init('myCanvas', Piece, Config);
