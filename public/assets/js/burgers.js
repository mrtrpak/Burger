$(document).ready(() => {
    $("#addBurger").on("submit", event => {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burgerText").val().trim()
        };
        $.ajax("/" + newBurger, {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                location.reload();
            }
        );
    });

    $(document).on("click", ".devourBtn", (e) => {
        let id = e.target.id;
        $.ajax("/" + id, {
            type: "PUT",
            data: true
        }).then(res => {
            location.reload();
        });
    });

    $(document).on("click", ".dltBtn", e => {
        let id = e.target.id;
        console.log("id of", id);
        $.ajax("/" + id, {
            type: "DELETE"
        }).then(res => {
            location.reload();
        });
    });
});