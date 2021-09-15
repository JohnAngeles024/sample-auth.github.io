function myFunction() {
    var response = confirm("082-262-1132");
    if (response == true) {
        window.open("tel:082-262-1132");
    } else {
        alert("A not fine choice!")
    }
}
