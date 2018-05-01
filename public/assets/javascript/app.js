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
    event.preventDefault();
    var newBurger = {
        burger: $("#addburger [name=burger]").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added new burger");
            location.reload();
        }
    ); // then
}); // on submit

//update burger
$("#updateburger").on("submit", function (event) {
    event.preventDefault();

    var id = $("[name=id]").val().trim();

    var updatedBurger = {
        burger: $("#updateburger [name=burger]").val().trim()
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
    }).then(
        function () {
            console.log("updated id ", id);
            location.reload();
        }
    ); // then
}); //on submit