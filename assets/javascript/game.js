//$(document).ready(function(){} --why does this break my code?
    var wins = 0;
    var losses = 0;
    var random = 0;
    var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];


    renderImages();

    startGame();

    function startGame() {
        random = Math.floor(Math.random() * 101 + 19);
        $("#matchThis").text(random);
        renderImages();
    }

    function renderImages() {
        $("#imgDiv").empty();
        for (let i = 0; i < images.length; i++) {

            var crystal = $("<img>");
            crystal.attr("src", images[i]);
            crystal.addClass("crystals");
            crystal.attr("data-id", Math.floor(Math.random() * 11 + 1));

            $("#imgDiv").append(crystal);
        }
    }
   /*Create listening event $("images").click(function(){} or on click? What's the difference 
   get value & add to total score 
   
   if (matchThis ===total sum){
    Alert ("Yay, You Win!");
   } 
                -->then add one to wins
    
    else if (matchThis >=total sum){  
    Alert ("Sorry, You Lose!");
    }
                -->then add one to loses 

    keep count/Tally of loses and wins --Counter or New Score? 
    */


   



