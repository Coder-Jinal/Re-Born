$(document).ready(function() {
    // Hide the gates at the start
    $(".gate").hide();

    // When the button is clicked
    $("#enter-button").click(function() {
        $(this).fadeOut(); // Hide the button

        // Show the gates and start opening them
        $(".gate").fadeIn(500, function() {
            // Start opening the gates with a 5-second transition
            $(".left").css({
                "transform": "rotateY(-90deg)",
                "transition": "transform 5s ease-in-out",
                "opacity": "1"
            });
            $(".right").css({
                "transform": "rotateY(90deg)",
                "transition": "transform 5s ease-in-out",
                "opacity": "1"
            });
            $(".text").css("opacity", "1");

            // Play the horror audio
            let audio = $("#horror-audio")[0];
            audio.play().catch(error => console.log("Audio play failed:", error));
        });
    });
    
    // When the loudspeaker image is clicked
    $('#audio-trigger').click(function() {
        var audio = $('#audio-player')[0]; // Get the audio element
        if (audio.paused) {
            audio.play(); // Play audio
        } else {
            audio.pause(); // Pause audio if already playing
        }
    });

    // Optional: Show the image when the audio is ready to play
    $('#audio-player').on('canplay', function() {
        $('#audio-trigger').show();
    });
});