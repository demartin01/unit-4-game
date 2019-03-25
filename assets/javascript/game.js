
// $(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var random = 0;
    var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];
    var score = 0; //get value of totalScore element
    // var total = 0

    startGame();

    function startGame() {
        random = Math.floor(Math.random() * 101 + 19);
        $("#matchThis").text(random);
        total = 0;
        $("#totalSum").text(total);
        renderImages();
    }

    function renderImages() {
        $("#imgDiv").empty();
        for (let i = 0; i < images.length; i++) {

            var crystal = $("<img>");
            crystal.attr("id", "image-" + (i + 1))
            crystal.attr("src", images[i]);
            crystal.addClass("crystals");
            crystal.attr("data-id", Math.floor(Math.random() * 11 + 1));


            crystal.click(function (event) {
                // need to dump this content into totalsum
                //$( "div" ).data( "role" );
                ($(this).data("id"));
                $(this).data("id")
            });

            $("#imgDiv").append(crystal);
        }
    }
    //Create listening event $(".rystals").click(function(){} or on click? What's the difference 
    $(document).on("click", ".crystals", function () {
        
    //get value & add to total score 
        total += parseInt($(this).attr("data-id"));
        $("#totalSum").text(total);

        if (total === random ) {
            alert("Yay, you Win!");
            wins++;
            $("#totalWins").text(wins);
            startGame();
        } 
        else if (total > random) {
            alert("Sorry, You lose!");
            losses++;
            $("#losses").text(losses);
            startGame();
        }

    })





    //    if (matchThis===total sum){
    //     Alert ("Yay, You Win!");
    //    } 
    //                 -->then add one to wins

    //     else if (matchThis >=total sum){  
    //     Alert ("Sorry, You Lose!");
    //     }
    //                 -->then add one to loses 

    //     keep count/Tally of loses and wins --Counter or New Score? 






// }); 
// --why does this break my code ?

