$("#addBurger").on("submit", event => {
    event.preventDefault();
    const newBurger = {
        burger_name: $("#burgerText").val().trim()
    };
    $.ajax("/", {
        type: "POST",
        data: newBurger
    }).then(
        () => {
            console.log("added new burger");
            location.reload();
        }
    );
});