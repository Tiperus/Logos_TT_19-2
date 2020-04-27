let season;
season = prompt ("Enter a number please")
if (season==1||season==2 || season==12){
    alert("It's winter")
}
else if (season>=3 && season<=5){
    alert("It's spring")
}
else if (season>=6 && season<=8){
    alert("It's summer")
}
else if (season>=9 && season<=11){
    alert("It's autumn")
}
else{
    alert("There is no such period")
}