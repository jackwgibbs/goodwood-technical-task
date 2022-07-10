function radioFilter(day){
    //Function with parameter 'day'. It gets the radio button with corresponding day,
    //checks whether it is checked or unchecked, and makes it the opposite, i.e. checked
    //becomes unchecked. 

    var button = document.getElementById(day);
    var checked = button.checked;
    if (checked == false){
        button.checked = true;
    }else{
        button.checked = false;
    }

    if (day == "tuesday"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "#cef2e8";
        document.getElementById("wednesdaydiv").style.backgroundColor= "white";
        document.getElementById("thursdaydiv").style.backgroundColor= "white";
        document.getElementById("fridaydiv").style.backgroundColor= "white";
        document.getElementById("saturdaydiv").style.backgroundColor= "white";
        document.getElementById("alldiv").style.backgroundColor= "white";
    }else if (day == "wednesday"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "white";
        document.getElementById("wednesdaydiv").style.backgroundColor= "#cef2e8";
        document.getElementById("thursdaydiv").style.backgroundColor= "white";
        document.getElementById("fridaydiv").style.backgroundColor= "white";
        document.getElementById("saturdaydiv").style.backgroundColor= "white";
        document.getElementById("alldiv").style.backgroundColor= "white";
    }else if (day == "thursday"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "white";
        document.getElementById("wednesdaydiv").style.backgroundColor= "white"
        document.getElementById("thursdaydiv").style.backgroundColor= "#cef2e8";
        document.getElementById("fridaydiv").style.backgroundColor= "white";
        document.getElementById("saturdaydiv").style.backgroundColor= "white";
        document.getElementById("alldiv").style.backgroundColor= "white";
    }else if (day == "friday"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "white";
        document.getElementById("wednesdaydiv").style.backgroundColor= "white";
        document.getElementById("thursdaydiv").style.backgroundColor= "white";
        document.getElementById("fridaydiv").style.backgroundColor= "#cef2e8";
        document.getElementById("saturdaydiv").style.backgroundColor= "white";
        document.getElementById("alldiv").style.backgroundColor= "white";
    }else if (day == "saturday"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "white";
        document.getElementById("wednesdaydiv").style.backgroundColor= "white";
        document.getElementById("thursdaydiv").style.backgroundColor= "white";
        document.getElementById("fridaydiv").style.backgroundColor= "white";
        document.getElementById("saturdaydiv").style.backgroundColor= "#cef2e8";
        document.getElementById("alldiv").style.backgroundColor= "white";
    }else if (day == "all"){
        document.getElementById("tuesdaydiv").style.backgroundColor= "white";
        document.getElementById("wednesdaydiv").style.backgroundColor= "white";
        document.getElementById("thursdaydiv").style.backgroundColor= "white";
        document.getElementById("fridaydiv").style.backgroundColor= "white";
        document.getElementById("saturdaydiv").style.backgroundColor= "white";
        document.getElementById("alldiv").style.backgroundColor= "#cef2e8";
    }
}
