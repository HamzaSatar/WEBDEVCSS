// JQuery Code Here
// Wrap out code in the ready method

$(document).ready(function () {
    console.log("DOM is ready to be manipulated!");

    // Animate the form appearance
    $('#registration-form').hide().fadeIn(3000);

    // Handle form submission
    $('#signup-form').submit(function (event) {
        event.preventDefault();

        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let date = $('#date').val();
        let isValid = true;
        console.log(name);
        console.log(email);
        console.log(date);

        if (name == "") {
            alert("Please enter your name");
            isValid = false;
        }
        if (email == "") {
            alert("Please enter your email");
            isValid = false;
        }
        if (date == "") {
            alert("Please select a date");
            isValid = false;
        }

        if (isValid) {
            $("#confirmation-message").slideUp(function () {
                $(this).html(`
                    <p>Thank you, <strong>${name}</strong>!</p>
                    <p>Your registration for the show on <strong>${date}</strong> is confirmed</p>
                    <p>A confirmation email has been sent to <strong>${email}</strong></p>
                `

                ).slideDown();
            });
            $("#signup-form")
                .find("input[type=text], input[type=email], select").val("");

        }

    })

    $("input, select").focus(function () {
        $(this).animate(
            {
                borderColor: '#68b3c8'
            }, 500
        )
    }).blur(function () {
        $(this).animate(
            {
                borderColor: "#ddd"
            }, 500
        )
    });

    // Submit Button Animation
    $("#signup-form input[type=submit]").hover(function () {
        $(this).animate(
            {
                // backgroundColor: jQuery.Color("#333333"),
            }, 200
        );
    },
        function () {
            $(this).animate(
                {
                    // backgroundColor: jQuery.Color("#5c5c5c"),

                }, 200
            );
        }
    );

    // Requirement 1: Reset button
    // Requirement 2: Fade Out
    $("#reset-button").click(function () {

        $("#signup-form").find("input[type=text], input[type=email], select").val("");
        $("#confirmation-message").fadeOut(500);

    }
    )
});

// ICE 4 TODO:
// 1. Add a reset button that clears all the inputs and confirmation message when clicked
// 2. Implement a "fade out" for the confirmation message after a certain period once the registration is confirmed