
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
