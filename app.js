window.onload = () =>{
    var second = 00;
    var ten = 00;
    var appendTen = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var Interval;

    start.onclick = () =>{
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        console.log(Interval);
    }

    startTimer = () =>{
        ten++;
        console.log(ten);

        if(ten<=9){
            appendTen.innerHTML = "0" + ten;
        }
    
        if(ten>9){
            appendTen.innerHTML = ten;
        }

        if(ten>99){
            second++;
            console.log(second);
            appendSeconds.innerHTML = "0" + second;
            ten = 0;
            appendTen.innerHTML = "0"+ ten;
        }
          
          if(second>9){
            appendSecond.innerHTML = second;
        }
    
        stop.onclick = ()=> {
          clearInterval(Interval);
        }
    }

    reset.onclick = () =>{
        clearInterval(Interval);
         ten = "00";
         second = "00";
         appendTen.innerHTML = ten;
         appendSeconds.innerHTML = second;
    }
}