$(document).ready(function(){
    $("#searchBtn").click(function(){
        var city = $("#city").val()

        if(city == ""){
            alert("Please enter city");
            return;
        }
        alert("Enter sucessfully")
    })
})