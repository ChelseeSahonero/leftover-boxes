let count = 0;
const increment = document.getElementById("increment");
const textHolder = document.getElementById("count");
textHolder.innerHTML = count;

increment.addEventListener("click", function() {
  textHolder.innerHTML = ++count;

const uki = document.getElementById("gen-img");
uki.classList.remove("uki-dance");

randomPosition();

uki.classList.add("uki-dance");

setTimeout(function(){
    uki.classList.remove("uki-dance");
}, 2000);


  });

  function imgchange() {
    var myImages1 = new Array();
    myImages1[1] = "UKI.PNG";
    myImages1[2] = "UKI.PNG";
    myImages1[3] = "UKI.PNG";
    myImages1[4] = "UKI.PNG";
    myImages1[5] = "UKI.PNG";
    myImages1[6] = "UKI.PNG";
    myImages1[7] = "UKI.PNG";
    myImages1[8] = "UKI.PNG";
    myImages1[9] = "UKI.PNG";
    myImages1[10] = "UKI.PNG";
    myImages1[11] = "UKI.PNG";
    var rnd = Math.floor(Math.random() * myImages1.length); // Random Choice of Image
    if (rnd == 0) {
      rnd = 1;
    }
  
    document.getElementById("gen-img").src = myImages1[rnd]; //Gets Image
  }
  
  function playRandomSound() {
  
    //An array to house all of the URLs of your sounds

    var sounds = [


        new Audio(
          "uki-1.mp3"
        ),
        new Audio(
            "uki-2.mp3"
        ),
        new Audio(
            "uki-3.mp3"
        ),
        new Audio(
            "uki-4.mp3"
        ),
        new Audio(
            "uki-5.mp3"
        ),
        new Audio(
            "uki-6.mp3"
        ),
        new Audio(
            "uki-7.mp3"
        ),
        new Audio(
            "uki-8.mp3"
        ),
        new Audio(
            "uki-9.mp3"
        ),
        new Audio(
            "uki-10.mp3"
        ),
        new Audio(
            "uki-11.mp3"
        )
      ];
  
    //This line will select a random sound to play out of your provided URLS
    var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
    soundFile.play()
  
    //Find the player element that you created and generate an embed file to play the sound within it
    document.getElementsByClassName("Button").innerHTML =
    '<embed src="' +
      soundFile +
      '" hidden="true" autostart="true" loop="false" />';
  }

//   function randomPosition(myclass){
//     var randomW = Math.floor(80*Math.random());
//     var randomH = Math.floor(80*Math.random());
//     $(myclass).css({'top' : randomH + '%'});
//     $(myclass).css({'left' : randomW + '%'});
//     var randomW = Math.floor(80*Math.random());
//     $(myclass).css({'scale' : randomW + '%'});
//   };
  function randomPosition(){
$(".uki").each(function () {
    var randomtop = Math.floor(Math.random() * ($('.container').height() - $(this).height() - 80));
    var randomleft = Math.floor(Math.random() * ($('.container').width() - $(this).width() - 80));
    var randomscale = (Math.floor(Math.random() * 3000) + 100) / 100;
    console.log(randomscale);
    $(this).css({
        "top": randomtop,
        "left": randomleft,
        "scale": randomscale
    });
});
  }
    function randomRotation(myclass){
        var randomH = Math.floor(80*Math.random());
        $(myclass).css({'rotate' : `${randomH}deg`});
    }

  randomPosition();

  randomRotation('.uki')



  function getCounterValue() {
    return parseInt(localStorage.getItem('count')) || 0;
}

function setCounterValue(value) {
    localStorage.setItem('count', value);
}

function incrementCounter() {
    let counterValue = getCounterValue();
    counterValue++;
    setCounterValue(counterValue);
    document.getElementById('count').innerText = counterValue;
}

document.getElementById('increment').addEventListener('click', incrementCounter);

document.addEventListener('DOMContentLoaded', function() {
    let counterValue = getCounterValue();
    document.getElementById('count').innerText = counterValue;
});
    
    
    
    
    
    
    