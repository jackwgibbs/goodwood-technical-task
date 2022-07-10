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
}
