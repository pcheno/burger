//delete a burger
$(".delburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("burgerid");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE" //delete request
    }).then(
        function () {
            console.log("deleted id ", id);
            location.reload();
        }
    ); //then
}); //on click

//add a burger
$("#addburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
        burger: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    ); // then
}); // on submit

//update burger
$(".update-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newState = {
        devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function () {
            console.log("modified: " + id);
            console.log("changed to ", newDevoured);
            location.reload();
        }
    ); //then
}); //on submit