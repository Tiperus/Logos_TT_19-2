
let ask = prompt('Введіть логін, будь ласка');
let count = 1;
let prom='login';
let proms;
if (ask==prom){
   alert('Запрошуємо на сайт');
}
else {
   alert('Ви ще маєте 4 спроби')
do{
   
   count++;
   proms=prompt('Спробуйте ще раз')


}
while( count<=4 && proms!=prom )
if (count<=4){
    alert('Ласкаво просимо')
}
else{
    alert('Спробуйе трохи пізніше')
}
}