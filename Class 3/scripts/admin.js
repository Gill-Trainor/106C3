var serverURL = "http://restclass.azurewebsites.net/API/";

function saveItem() {
    //get the values
    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val()
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var delivery = $("#txtDelivery").val();

}
// create an object
//How to create an object using object constructor and object literal

// send the object to the server
$.ajax({

});

function testAjax() {

    //Async
    //Javascript
    //And
    //XML com JSON

    $.ajax({
        url: serverURL + "test", //"test2" if you want to test error
        type: 'GET',
        success: function (res) {
            console.log("Payment finished");
            console.log("Server says", res);
        },
        error: function (err) {
            console.log("Payment error");
            console.log("Error ocurred", err);
        }
    });
    console.log("Order complete, payment accepted");
    console.log("NOT FINISHED YET");
}

function init() {
    console.log("This is Admin page!!");

    //retrief initial data

    //hook events
    $("#btnSave").click(saveItem);

}

window.onload = init;