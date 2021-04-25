    

    
    function setColor(ballId){

      var ball = document.getElementById(ballId);

      ball.style.background = Math.floor(Math.random()*16777215).toString(16);;

    }
   

    setInterval(() => setColor("ball0"), 100);

